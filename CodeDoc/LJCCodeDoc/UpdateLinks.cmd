set root=..\..\..\LJCProjects

rem ---------------
set src=\GenealogyManager\GenealogyManager\LinkPages
set to=HTML\GenealogyManager
copy %root%%src%\GenealogyTables.html %to%
copy %root%%src%\GenealogyTables.jpg %to%

rem ---------------
set src=\LJCAppManager\LJCAppManager\LinkPages
set to=HTML\LJCAppManager
copy %root%%src%\AppManagerTables.html %to%
copy %root%%src%\AppManagerTables.jpg %to%

rem ---------------
set src=\LJCDataAccess\LJCDataAccess\Diagrams
set to=HTML\LJCDataAccess
copy %root%%src%\DataAccessLink.html %to%
copy %root%%src%\DataAccessLink.jpg %to%

rem ---------------
set src=\LJCDataAccessConfig\LJCDataAccessConfig\Diagrams
set to=HTML\LJCDataAccessConfig
copy %root%%src%\DataAccessConfig.html %to%
copy %root%%src%\DataAccessConfig.jpg %to%

rem ---------------
set src=\LJCDataTransform\LJCTransformManager\LinkPages
set to=HTML\LJCTransformManager
copy %root%%src%\ProcessTables.html %to%
copy %root%%src%\ProcessTables.jpg %to%
copy %root%%src%\SourceLayoutTables.html %to%
copy %root%%src%\SourceLayoutTables.jpg %to%
copy %root%%src%\TaskSourceTables.html %to%
copy %root%%src%\TaskSourceTables.jpg %to%
copy %root%%src%\TransformTables.html %to%
copy %root%%src%\TransformTables.jpg %to%

rem ---------------
set src=\LJCDBClientLib\LJCDBClientLib\Diagrams
set to=HTML\LJCDBClientLib
copy %root%%src%\Configuration.html %to%
copy %root%%src%\Configuration.jpg %to%
copy %root%%src%\DataMethods.html %to%
copy %root%%src%\DataMethods.jpg %to%

rem ---------------
set src=\LJCDBMessage\LJCDBMessage\Diagrams
set to=HTML\LJCDBMessage
copy %root%%src%\DbRequestColumn.html %to%
copy %root%%src%\DbRequestColumn.jpg %to%
copy %root%%src%\DbRequestJoin.html %to%
copy %root%%src%\DbRequestJoin.jpg %to%
copy %root%%src%\DbRequestResult.html %to%
copy %root%%src%\DbResult.jpg %to%

set src=\LJCDBMessage\LJCDBMessage
copy %root%%src%\DbMessageGraph.jpg %to%

rem ---------------
set src=\LJCDBServiceLib\LJCDBDataAccessLib\Diagrams
set to=HTML\LJCDBDataAccessLib
copy %root%%src%\DbAccessConfig.html %to%
copy %root%%src%\DbAccessConfig.jpg %to%
copy %root%%src%\DbAccessData.html %to%
copy %root%%src%\DbAccessData.jpg %to%

rem ---------------
set src=\LJCDocAppManager\LJCDocAppManager\LinkPages
set to=HTML\LJCDocAppManager
copy %root%%src%\DocAppTables.html %to%
copy %root%%src%\DocAppTables.jpg %to%

rem ---------------
set src=\LJCDocLib\LJCDocGenLib\Diagrams
set to=HTML\LJCDocGenLib
copy %root%%src%\GenRootToMethod.html %to%
copy %root%%src%\GenRootToMethod.jpg %to%
copy %root%%src%\GenPropertyToField.html %to%
copy %root%%src%\GenPropertyToField.jpg %to%

set src=\LJCDocLib\LJCDocGenLib\CreateXML
copy %root%%src%\DocLibDataGraph.jpg %to%
copy %root%%src%\DocLibXMLGraph.jpg %to%

set src=\LJCDocLib\LJCDocObjLib\Diagrams
set to=HTML\LJCDocObjLib
copy %root%%src%\DataRootToMethod.html %to%
copy %root%%src%\DataRootToMethod.jpg %to%
copy %root%%src%\DataPropertyToExample.html %to%
copy %root%%src%\DataPropertyToExample.jpg %to%

set src=\LJCDocLib\LJCDocXMLObjLib\Diagrams
set to=HTML\LJCDocXMLObjLib
copy %root%%src%\DocXML.html %to%
copy %root%%src%\DocXML.jpg %to%

rem ---------------
set src=\LJCFacilityManager\LJCFacilityManager\LinkPages
set to=HTML\LJCFacilityManager
copy %root%%src%\BusinessTables.html %to%
copy %root%%src%\BusinessTables.jpg %to%
copy %root%%src%\FacilityTables.html %to%
copy %root%%src%\FacilityTables.jpg %to%
copy %root%%src%\PersonTables.html %to%
copy %root%%src%\PersonTables.jpg %to%

rem ---------------
set src=\LJCGenText\LJCGenTextLib\Diagrams
set to=HTML\LJCGenTextLib
copy %root%%src%\GenTextLib.html %to%
copy %root%%src%\GenTextLib.jpg %to%

rem ---------------
set src=\LJCRegionManager\LJCRegionManager\LinkPages
set to=HTML\LJCRegionManager
copy %root%%src%\RegionTables.html %to%
copy %root%%src%\RegionTables.jpg %to%

rem ---------------
set src=\LJCSales\LJCSalesManager\LinkPages
set to=HTML\LJCSalesManager
copy %root%%src%\OrderTables.html %to%
copy %root%%src%\OrderTables.jpg %to%
copy %root%%src%\ProductTables.html %to%
copy %root%%src%\ProductTables.jpg %to%

rem ---------------
set src=\LJCViewEditor\LJCViewEditor\LinkPages
set to=HTML\LJCViewEditor
copy %root%%src%\ViewDataTables.html %to%
copy %root%%src%\ViewDataTables.jpg %to%
copy %root%%src%\ViewGridTables.html %to%
copy %root%%src%\ViewGridTables.jpg %to%
copy %root%%src%\ViewJoin.html %to%
copy %root%%src%\ViewJoin.jpg %to%
