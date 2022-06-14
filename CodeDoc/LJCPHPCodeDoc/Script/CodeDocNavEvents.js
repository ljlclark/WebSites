"use strict";
// Copyright(c) Lester J. Clark 2022 - All Rights Reserved
// CodeDocNavEvents.js

// ***************
// Contains LJCNavPHPCodeDoc event handlers.
class NavEvents
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
		this.NavItems.Add("Projects", "LJCPHPCodeDoc.html");

		// Common Libraries
		this.NavItems.Add("CommonCode", "HTML/LJCCommonLib.html");
		this.NavItems.Add("LJCCommon", "HTML/LJCCommon/LJCCommon.html");

		this.NavItems.Add("GenCodeDocLib", "HTML/GenCodeDocLib.html");
		this.NavItems.Add("GenCodeDoc", "HTML/GenCodeDoc/GenCodeDoc.html");

		this.NavItems.Add("TextOutput", "HTML/LJCTextLib.html");
		this.NavItems.Add("StringBuilder", "HTML/LJCStringBuilder/LJCStringBuilder.html");
		this.NavItems.Add("TableColumn", "HTML/LJCHTMLTableColumn/LJCHTMLTableColumn.html");
		this.NavItems.Add("HTMLWriter", "HTML/LJCHTMLWriter/LJCHTMLWriter.html");
		this.NavItems.Add("Writer", "HTML/LJCWriter/LJCWriter.html");

		this.NavItems.Add("Collections", "HTML/LJCCollectionLib.html");
		this.NavItems.Add("Collection", "HTML/LJCCollectionBase/LJCCollectionBase.html");

		// Data Libraries
		this.NavItems.Add("DataAccessLib", "HTML/LJCDBAccessLib.html");
		this.NavItems.Add("Connection", "HTML/LJCConnectionValues/LJCConnectionValues.html");
		this.NavItems.Add("DataAccess", "HTML/LJCDbAccess/LJCDbAccess.html");
		this.NavItems.Add("Column", "HTML/LJCDbColumn/LJCDbColumn.html");
		this.NavItems.Add("Columns", "HTML/LJCDbColumns/LJCDbColumns.html");
		this.NavItems.Add("Join", "HTML/LJCJoin/LJCJoin.html");
		this.NavItems.Add("Joins", "HTML/LJCJoins/LJCJoins.html");
		this.NavItems.Add("JoinOn", "HTML/LJCJoinOn/LJCJoinOn.html");
		this.NavItems.Add("JoinOns", "HTML/LJCJoinOns/LJCJoinOns.html");

		this.NavItems.Add("DataManagerLib", "HTML/LJCDataManagerLib.html");
		this.NavItems.Add("DataManager", "HTML/LJCDataManager/LJCDataManager.html");
		this.NavItems.Add("SQLBuilder", "HTML/LJCSQLBuilder/LJCSQLBuilder.html");

		// Text Generator Utility
		this.NavItems.Add("GenSections", "HTML/LJCGenTextSectionLib.html");
		this.NavItems.Add("Directive", "HTML/LJCDirective/LJCDirective.html");
		this.NavItems.Add("Item", "HTML/LJCItem/LJCItem.html");
		this.NavItems.Add("Section", "HTML/LJCSection/LJCSection.html");
		this.NavItems.Add("Sections", "HTML/LJCSections/LJCSections.html");
		this.NavItems.Add("Replacement", "HTML/LJCReplacement/LJCReplacement.html");

		this.NavItems.Add("TextGenerator", "HTML/LJCGenTextLib.html");
		this.NavItems.Add("GenText", "HTML/LJCGenText/LJCGenText.html");

		// CodeDoc Generator Utility
		this.NavItems.Add("XMLComments", "HTML/LJCCommentsLib.html");
		this.NavItems.Add("LJCComments", "HTML/LJCComments/LJCComments.html");

		this.NavItems.Add("DocDataXML", "HTML/LJCDocDataGenLib.html");
		this.NavItems.Add("DocDataGen", "HTML/LJCDocDataGen/LJCDocDataGen.html");

		this.NavItems.Add("DocData", "HTML/LJCDocDataLib.html");
		this.NavItems.Add("DocDataClass", "HTML/LJCDocDataClass/LJCDocDataClass.html");
		this.NavItems.Add("DocDataClasses", "HTML/LJCDocDataClasses/LJCDocDataClasses.html");
		this.NavItems.Add("DocDataFile", "HTML/LJCDocDataFile/LJCDocDataFile.html");
		this.NavItems.Add("DocDataMethod", "HTML/LJCDocDataMethod/LJCDocDataMethod.html");
		this.NavItems.Add("DocDataMethods", "HTML/LJCDocDataMethods/LJCDocDataMethods.html");
		this.NavItems.Add("DocDataParam", "HTML/LJCDocDataParam/LJCDocDataParam.html");
		this.NavItems.Add("DocDataParams", "HTML/LJCDocDataParams/LJCDocDataParams.html");
		this.NavItems.Add("DocDataProperty", "HTML/LJCDocDataProperty/LJCDocDataProperty.html");
		this.NavItems.Add("DocDataProperties", "HTML/LJCDocDataProperties/LJCDocDataProperties.html");

		this.NavItems.Add("GenDataXML", "HTML/LJCGenDataGenLib.html");
		this.NavItems.Add("GenDataGen", "HTML/LJCGenDataGen/LJCGenDataGen.html");

		this.NavItems.Add("GenXMLSections", "HTML/LJCGenDataXMLLib.html");
		this.NavItems.Add("GenSectionXML", "HTML/LJCGenDataXML/LJCGenDataXML.html");

		this.NavItems.Add("FileXMLComments", "HTML/LJCIncludeLib.html");
		this.NavItems.Add("Include", "HTML/LJCInclude/LJCInclude.html");

		this.NavItems.Add("ParamXMLComments", "HTML/LJCParamCommentLib.html");
		this.NavItems.Add("ParamComment", "HTML/LJCParamComment/LJCParamComment.html");
	}
}