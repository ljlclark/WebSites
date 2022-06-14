"use strict";
// Copyright(c) Lester J. Clark 2022 - All Rights Reserved
// CCodeDocNavEvents.js

class CNavEvents
{
	// Initializes an object instance with the provided values.
	constructor(contentFrame)
	{
		this.ContentFrame = contentFrame;
		this.PrevNavItem = null;
		this.NavItems = new CodeDocNavItems();
		this.CreateNavItems();
	}

	// Adds the HTML event handlers.
	AddEvents()
	{
		// Document Event Handlers.
		document.addEventListener("click", this.DocumentClick.bind(this));
	}

	// Document "click" handler method.
	// event - The Target event.
	DocumentClick(event)
	{
		let srcElement = event.target;
		if ("navGroup" == srcElement.className
			|| "navItem" == srcElement.className)
		{
			let navItem = this.NavItems.SearchName(srcElement.id);
			if (navItem != null)
			{
				if (this.ContentFrame != null)
				{
					this.ContentFrame.src = navItem.URL;
				}
			}

			if (this.PrevNavItem != null)
			{
				this.PrevNavItem.style.backgroundColor = "";
			}
			this.PrevNavItem = srcElement;
			srcElement.style.backgroundColor = "#d4dfff";
		}
	}

	// Creates the NavItem entries.
	CreateNavItems()
	{
		this.NavItems.Add("Projects", "CodeDoc.html");
		this.NavItems.Add("Build", "SystemBuild.html");

		// * Common Libraries
		// - .NET Code
		this.NavItems.Add("NetCommon", "HTML/LJCNetCommon/LJCNetCommon.html");
		this.NavItems.Add("DBScript", "HTML/LJCExecuteScript/LJCExecuteScript.html");
		this.NavItems.Add("Parser", "HTML/LJCAddressParserLib/LJCAddressParserLib.html");

		// - WinForms
		this.NavItems.Add("Common", "HTML/LJCWinFormCommon/LJCWinFormCommon.html");
		this.NavItems.Add("Controls", "HTML/LJCWinFormControls/LJCWinFormControls.html");
		this.NavItems.Add("GridLib", "HTML/LJCGridDataLib/LJCGridDataLib.html");

		// - Text DataReader
		this.NavItems.Add("Reader", "HTML/LJCTextDataReaderLib/LJCTextDataReaderLib.html");
		this.NavItems.Add("TestCon", "HTML/LJCTestConsole/LJCTestConsole.html");

		// - DataDetail
		this.NavItems.Add("Dtl", "HTML/DataDetail/DataDetail.html");
		this.NavItems.Add("DtlLib", "HTML/LJCDataDetailLib/LJCDataDetailLib.html");
		this.NavItems.Add("DtlCon", "HTML/LJCDataDetailConsole/LJCDataDetailConsole.html");
		this.NavItems.Add("TestData", "HTML/LJCTestDataLib/LJCTestDataLib.html");

		// * Data Libraries
		// - Data Access
		this.NavItems.Add("Overview", "DataOverview.html");
		this.NavItems.Add("Data", "HTML/LJCDataAccess/LJCDataAccess.html");
		this.NavItems.Add("DBData", "HTML/LJCDBDataAccessLib/LJCDBDataAccessLib.html");
		this.NavItems.Add("DataTest", "HTML/LJCDataAccessTest/LJCDataAccessTest.html");
		this.NavItems.Add("Config", "HTML/LJCDataAccessConfig/LJCDataAccessConfig.html");
		this.NavItems.Add("ConfigCon", "HTML/ConfigTestConsole/ConfigTestConsole.html");

		// - Client
		this.NavItems.Add("Client", "HTML/LJCDBClientLib/LJCDBClientLib.html");
		this.NavItems.Add("Message", "HTML/LJCDBMessage/LJCDBMessage.html");
		this.NavItems.Add("Cipher", "HTML/CipherLib/CipherLib.html");
		this.NavItems.Add("Key", "HTML/ForeignKeyManagerTest/ForeignKeyManagerTest.html");
		this.NavItems.Add("SQLUtil", "HTML/LJCSQLUtilLib/LJCSQLUtilLib.html");
		this.NavItems.Add("SQLUtilDAL", "HTML/LJCSQLUtilLibDAL/LJCSQLUtilLibDAL.html");

		// - Server
		this.NavItems.Add("Host", "HTML/LJCDBServiceHost/LJCDBServiceHost.html");
		this.NavItems.Add("HostCon", "HTML/LJCDBServiceConsoleHost/LJCDBServiceConsoleHost.html");
		this.NavItems.Add("DBService", "HTML/LJCDBServiceLib/LJCDBServiceLib.html");

		// - Person DAL Test
		this.NavItems.Add("PDALTest", "HTML/PersonDALTest/PersonDALTest.html");
		this.NavItems.Add("PDAL", "HTML/PersonDAL/PersonDAL.html");

		// * Code Generator Utility
		// - Code Generator
		this.NavItems.Add("GenText", "HTML/LJCGenText/LJCGenText.html");
		this.NavItems.Add("GenLib", "HTML/LJCGenTextLib/LJCGenTextLib.html");

		// - Code Generation Editor
		this.NavItems.Add("GenEdit", "HTML/LJCGenTextEdit/LJCGenTextEdit.html");
		this.NavItems.Add("GenTable", "HTML/LJCGenTableCode/LJCGenTableCode.html");

		// * HTML Documentation Generator
		// - Page Generation
		this.NavItems.Add("DocGen", "HTML/LJCDocGen/LJCDocGen.html");
		this.NavItems.Add("GenPage", "HTML/LJCGenPageGen/LJCGenPageGen.html");
		this.NavItems.Add("DocLib", "HTML/LJCDocGenLib/LJCDocGenLib.html");

		// - Deserialization Objects
		this.NavItems.Add("DocDAL", "HTML/LJCDocLibDAL/LJCDocLibDAL.html");
		this.NavItems.Add("DocObj", "HTML/LJCDocObjLib/LJCDocObjLib.html");
		this.NavItems.Add("DocXML", "HTML/LJCDocXMLObjLib/LJCDocXMLObjLib.html");

		// - Group Editor
		this.NavItems.Add("DocEdit", "HTML/LJCDocGroupEditor/LJCDocGroupEditor.html");

		// * Data Transform Projects
		this.NavItems.Add("DTMgr", "HTML/LJCTransformManager/LJCTransformManager.html");
		this.NavItems.Add("DTProcess", "HTML/LJCDataTransformProcess/LJCDataTransformProcess.html");
		this.NavItems.Add("CommonMod", "HTML/LJCCommonModuleLib/LJCCommonModuleLib.html");
		this.NavItems.Add("DTDAL", "HTML/LJCDataTransformDAL/LJCDataTransformDAL.html");
		this.NavItems.Add("DTTest", "HTML/TransformServiceTest/TransformServiceTest.html");

		// * Sales Manager
		this.NavItems.Add("SalesMgr", "HTML/LJCSalesManager/LJCSalesManager.html");
		this.NavItems.Add("SalesDAL", "HTML/LJCSalesDAL/LJCSalesDAL.html");

		// * Unit Measure
		this.NavItems.Add("Unit", "HTML/LJCUnitMeasure/LJCUnitMeasure.html");
		this.NavItems.Add("UnitDAL", "HTML/LJCUnitMeasureDAL/LJCUnitMeasureDAL.html");

		// * Application Manager
		this.NavItems.Add("App", "HTML/LJCAppManager/LJCAppManager.html");
		this.NavItems.Add("AppDAL", "HTML/LJCAppManagerDAL/LJCAppManagerDAL.html");

		// * Facility Manager
		this.NavItems.Add("FacMgr", "HTML/LJCFacilityManager/LJCFacilityManager.html");
		this.NavItems.Add("FacDAL", "HTML/LJCFacilityManagerDAL/LJCFacilityManagerDAL.html");
		this.NavItems.Add("FacForm", "HTML/LJCFacilityForm/LJCFacilityForm.html");
		this.NavItems.Add("ModHost", "HTML/ModuleHost/ModuleHost.html");

		// * Facility Manager Setup
		this.NavItems.Add("FacSetup", "HTML/LJCFacilityManagerSetup/LJCFacilityManagerSetup.html");

		// * Region Manager
		this.NavItems.Add("RegMgr", "HTML/LJCRegionManager/LJCRegionManager.html");
		this.NavItems.Add("RegDAL", "HTML/LJCRegionDAL/LJCRegionDAL.html");
		this.NavItems.Add("RegForm", "HTML/LJCRegionForm/LJCRegionForm.html");

		// * DocApp Manager
		this.NavItems.Add("DocAppMgr", "HTML/LJCDocAppManager/LJCDocAppManager.html");
		this.NavItems.Add("DocAppDAL", "HTML/LJCDocAppManagerDAL/LJCDocAppManagerDAL.html");

		// * DataView
		// - DataView Data Access Layer
		this.NavItems.Add("ViewDAL", "HTML/LJCDBViewDAL/LJCDBViewDAL.html");
		this.NavItems.Add("ConApp2", "HTML/ConsoleApp2/ConsoleApp2.html");

		// - DataView Builder
		this.NavItems.Add("ViewBuild", "HTML/LJCViewBuilder/LJCViewBuilder.html");

		// - DataView Editor
		this.NavItems.Add("ViewEdit", "HTML/LJCViewEditor/LJCViewEditor.html");
		this.NavItems.Add("ViewEditDAL", "HTML/LJCViewEditorDAL/LJCViewEditorDAL.html");

		// * Code Line Counter and Text Finder
		this.NavItems.Add("LineCount", "HTML/LJCCodeLineCounter/LJCCodeLineCounter.html");

		// * Text Invasion Typing Game
		this.NavItems.Add("TextInvade", "HTML/LJCTextInvasion/LJCTextInvasion.html");

		// * Pagination Testing
		this.NavItems.Add("DataList", "HTML/LJCDataPageList/LJCDataPageList.html");
		this.NavItems.Add("TextList", "HTML/LJCTextPageList/LJCTextPageList.html");
	}
}