Ext.onReady(function(){function b(){var o=0;var l=0;var j=0;var i=0;var p=0;var m=0;var k=0;this.addData=function(n,s){if(p==0){m=n;k=s}else{var r=n-m;var q=s-k;j+=r*r*p/(p+1);i+=r*q*p/(p+1);m+=r/(p+1);k+=q/(p+1)}o+=n;l+=s;p++};this.predict=function(n){var q=this.getSlope();return this.getIntercept(q)+q*n};this.getSlope=function(){if(p<2){return Number.NaN}return i/j};this.getIntercept=function(n){return(l-n*o)/p}}Ext.Ajax.method="GET";DV={core:{instances:[]},i18n:{},isDebug:false,isSessionStorage:"sessionStorage" in window&&window.sessionStorage!==null};DV.core.getInstance=function(o){var k={},j={},m={},i={},l={},n;(function(){k.finals={ajax:{path_module:"/dhis-web-visualizer/",path_api:"/api/",path_commons:"/dhis-web-commons-ajax-json/",data_get:"chartValues.json",indicator_get:"indicatorGroups/",indicator_getall:"indicators.json?paging=false&links=false",indicatorgroup_get:"indicatorGroups.json?paging=false&links=false",dataelement_get:"dataElementGroups/",dataelement_getall:"dataElements.json?paging=false&links=false",dataelementgroup_get:"dataElementGroups.json?paging=false&links=false",dataset_get:"dataSets.json?paging=false&links=false",organisationunit_getbygroup:"getOrganisationUnitPathsByGroup.action",organisationunit_getbylevel:"getOrganisationUnitPathsByLevel.action",organisationunit_getbyids:"getOrganisationUnitPaths.action",organisationunitgroup_getall:"organisationUnitGroups.json?paging=false&links=false",organisationunitgroupset_get:"getOrganisationUnitGroupSetsMinified.action",organisationunitlevel_getall:"organisationUnitLevels.json?paging=false&links=false&viewClass=detailed",organisationunitchildren_get:"getOrganisationUnitChildren.action",favorite_addorupdate:"addOrUpdateChart.action",favorite_addorupdatesystem:"addOrUpdateSystemChart.action",favorite_updatename:"updateChartName.action",favorite_get:"charts/",favorite_getall:"getSystemAndCurrentUserCharts.action",favorite_delete:"deleteCharts.action"},dimension:{data:{value:"data",name:DV.i18n.data,dimensionName:"dx",objectName:"dx"},indicator:{value:"indicator",name:DV.i18n.indicator,dimensionName:"dx",objectName:"in"},dataElement:{value:"dataelement",name:DV.i18n.data_element,dimensionName:"dx",objectName:"de"},operand:{value:"operand",name:"Operand",dimensionName:"dx",objectName:"dc"},dataSet:{value:"dataset",name:DV.i18n.dataset,dimensionName:"dx",objectName:"ds"},category:{name:DV.i18n.categories,dimensionName:"co",objectName:"co"},period:{value:"period",name:DV.i18n.period,dimensionName:"pe",objectName:"pe"},fixedPeriod:{value:"periods"},relativePeriod:{value:"relativePeriods"},organisationUnit:{value:"organisationUnits",name:DV.i18n.organisation_units,dimensionName:"ou",objectName:"ou"},dimension:{value:"dimension"},value:{value:"value"}},chart:{series:"series",category:"category",filter:"filter",column:"column",stackedcolumn:"stackedcolumn",bar:"bar",stackedbar:"stackedbar",line:"line",area:"area",pie:"pie",radar:"radar"},data:{domain:"domain_",targetLine:"targetline_",baseLine:"baseline_",trendLine:"trendline_"},image:{png:"png",pdf:"pdf"},cmd:{init:"init_",none:"none_",urlparam:"id"},root:{id:"root"}};n=k.finals.dimension;n.objectNameMap={};n.objectNameMap[n.data.objectName]=n.data;n.objectNameMap[n.indicator.objectName]=n.indicator;n.objectNameMap[n.dataElement.objectName]=n.dataElement;n.objectNameMap[n.operand.objectName]=n.operand;n.objectNameMap[n.dataSet.objectName]=n.dataSet;n.objectNameMap[n.category.objectName]=n.category;n.objectNameMap[n.period.objectName]=n.period;n.objectNameMap[n.organisationUnit.objectName]=n.organisationUnit;n.objectNameMap[n.dimension.objectName]=n.dimension;k.period={relativePeriods:{LAST_WEEK:1,LAST_4_WEEKS:4,LAST_12_WEEKS:12,LAST_MONTH:1,LAST_3_MONTHS:3,LAST_BIMONTH:1,LAST_6_BIMONTHS:6,LAST_12_MONTHS:12,LAST_QUARTER:1,LAST_4_QUARTERS:4,LAST_SIX_MONTH:1,LAST_2_SIXMONTHS:2,LAST_FINANCIAL_YEAR:1,LAST_5_FINANCIAL_YEARS:6,THIS_YEAR:1,LAST_YEAR:1,LAST_5_YEARS:5},relativePeriodValueKeys:{LAST_WEEK:"lastWeek",LAST_4_WEEKS:"last4Weeks",LAST_12_WEEKS:"last12Weeks",LAST_MONTH:"lastMonth",LAST_3_MONTHS:"last3Months",LAST_12_MONTHS:"last12Months",LAST_BIMONTH:"lastBimonth",LAST_6_BIMONTHS:"last6BiMonths",LAST_QUARTER:"lastQuarter",LAST_4_QUARTERS:"last4Quarters",LAST_SIX_MONTH:"lastSixMonth",LAST_2_SIXMONTHS:"last2SixMonths",LAST_FINANCIAL_YEAR:"lastFinancialYear",LAST_5_FINANCIAL_YEARS:"last5FinancialYears",THIS_YEAR:"thisYear",LAST_YEAR:"lastYear",LAST_5_YEARS:"last5Years"},relativePeriodParamKeys:{lastWeek:"LAST_WEEK",last4Weeks:"LAST_4_WEEKS",last12Weeks:"LAST_12_WEEKS",lastMonth:"LAST_MONTH",last3Months:"LAST_3_MONTHS",last12Months:"LAST_12_MONTHS",lastBimonth:"LAST_BIMONTH",last6BiMonths:"LAST_6_BIMONTHS",lastQuarter:"LAST_QUARTER",last4Quarters:"LAST_4_QUARTERS",lastSixMonth:"LAST_SIX_MONTH",last2SixMonths:"LAST_2_SIXMONTHS",lastFinancialYear:"LAST_FINANCIAL_YEAR",last5FinancialYears:"LAST_5_FINANCIAL_YEARS",thisYear:"THIS_YEAR",lastYear:"LAST_YEAR",last5Years:"LAST_5_YEARS"},periodTypes:[{id:"Daily",name:"Daily"},{id:"Weekly",name:"Weekly"},{id:"Monthly",name:"Monthly"},{id:"BiMonthly",name:"BiMonthly"},{id:"Quarterly",name:"Quarterly"},{id:"SixMonthly",name:"SixMonthly"},{id:"Yearly",name:"Yearly"},{id:"FinancialOct",name:"FinancialOct"},{id:"FinancialJuly",name:"FinancialJuly"},{id:"FinancialApril",name:"FinancialApril"}]};k.chart={style:{inset:30,fontFamily:"Arial,Sans-serif,Lucida Grande,Ubuntu"},theme:{dv1:["#94ae0a","#0b3b68","#a61120","#ff8809","#7c7474","#a61187","#ffd13e","#24ad9a","#a66111","#414141","#4500c4","#1d5700"]}};k.statusbar={icon:{error:"error_s.png",warning:"warning.png",ok:"ok.png"}};k.layout={west_width:424,west_fieldset_width:416,west_width_padding:4,west_fill:2,west_fill_accordion_indicator:59,west_fill_accordion_dataelement:59,west_fill_accordion_dataset:33,west_fill_accordion_period:296,west_fill_accordion_organisationunit:62,west_maxheight_accordion_indicator:350,west_maxheight_accordion_dataelement:350,west_maxheight_accordion_dataset:350,west_maxheight_accordion_period:513,west_maxheight_accordion_organisationunit:500,west_maxheight_accordion_group:350,west_scrollbarheight_accordion_indicator:300,west_scrollbarheight_accordion_dataelement:300,west_scrollbarheight_accordion_dataset:300,west_scrollbarheight_accordion_period:450,west_scrollbarheight_accordion_organisationunit:450,west_scrollbarheight_accordion_group:300,east_tbar_height:31,east_gridcolumn_height:30,form_label_width:55,window_favorite_ypos:100,window_confirm_width:250,window_share_width:500,grid_favorite_width:420,grid_row_height:27,treepanel_minheight:135,treepanel_maxheight:400,treepanel_fill_default:310,treepanel_toolbar_menu_width_group:140,treepanel_toolbar_menu_width_level:120,multiselect_minheight:100,multiselect_maxheight:250,multiselect_fill_default:345,multiselect_fill_reportingrates:315}}());(function(){j.array={sortDimensions:function(r,q){q=q||"dimensionName";Ext.Array.sort(r,function(u,t){if(u[q]<t[q]){return -1}if(u[q]>t[q]){return 1}return 0});for(var p=0,s;p<r.length;p++){s=r[p];if(s.items){r[p].items.sort()}}return r},sortObjectsByString:function(q,p){p=p||"name";q.sort(function(s,r){var u=s[p].toLowerCase(),t=r[p].toLowerCase();if(u<t){return -1}if(u>t){return 1}return 0});return q}};j.window={setAnchorPosition:function(p,t){var r=dv.viewport.getWidth(),s=t?t.getPosition()[0]:4,q=p.getWidth(),u=t?t.getPosition()[1]+t.getHeight()+4:33;if((s+q)>r){p.setPosition((r-q-2),u)}else{p.setPosition(s,u)}},addHideOnBlurHandler:function(p){var q=Ext.get(Ext.query(".x-mask")[0]);q.on("click",function(){if(p.hideOnBlur){p.hide()}});p.hasHideOnBlurHandler=true},addDestroyOnBlurHandler:function(p){var q=Ext.get(Ext.query(".x-mask")[0]);q.on("click",function(){if(p.destroyOnBlur){p.destroy()}});p.hasDestroyOnBlurHandler=true}};j.mask={showMask:function(p,q){q=q||"Loading..";if(p.mask&&p.mask.destroy){p.mask.destroy()}p.mask=new Ext.LoadMask(p,{msg:q});p.mask.show()},hideMask:function(p){if(p.mask&&p.mask.hide){p.mask.hide()}}};j.number={isInteger:function(r){var q=new String(r);if(q.indexOf("-")>-1){var p=q.substr(q.indexOf("-")+1);return(p.length===1&&p=="0")}return false},allValuesAreIntegers:function(p){for(var q=0;q<p.length;q++){if(!this.isInteger(p[q].value)){return false}}return true},getChartAxisFormatRenderer:function(){return this.allValuesAreIntegers(DV.value.values)?"0":"0.0"}};j.str={replaceAll:function(r,q,p){return r.replace(new RegExp(q,"g"),p)}};j.value={jsonfy:function(r){var p=[];for(var s=0;s<r.length;s++){var q={value:parseFloat(r[s][0]),data:r[s][1],period:r[s][2],organisationunit:r[s][3]};p.push(q)}return p}}}());(function(){o.dimensions=j.array.sortObjectsByString(o.dimensions);for(var p=0,q;p<o.dimensions.length;p++){q=o.dimensions[p];q.dimensionName=q.id;q.objectName=n.dimension.objectName;n.objectNameMap[q.id]=q}}());(function(){m.layout={};m.response={};m.layout.Record=function(q){var p={};return function(){if(!Ext.isObject(q)){console.log("Record config is not an object: "+q);return}if(!Ext.isString(q.id)){alert("Record id is not text: "+q);return}p.id=q.id.replace(".","-");if(Ext.isString(q.name)){p.name=q.name}return Ext.clone(p)}()};m.layout.Dimension=function(p){var q={};return function(){if(!Ext.isObject(p)){console.log("Dimension config is not an object: "+p);return}if(!Ext.isString(p.dimension)){console.log("Dimension name is not text: "+p);return}if(p.dimension!==k.finals.dimension.category.objectName){var r=[];if(!Ext.isArray(p.items)){console.log("Dimension items is not an array: "+p);return}for(var s=0;s<p.items.length;s++){record=m.layout.Record(p.items[s]);if(record){r.push(record)}}p.items=r;if(!p.items.length){console.log("Dimension has no valid items: "+p);return}}q.dimension=p.dimension;q.items=p.items;return Ext.clone(q)}()};m.layout.Layout=function(q){var r={};var p=function(v){var t=[];if(!(v&&Ext.isArray(v)&&v.length)){return}for(var s=0,u;s<v.length;s++){u=m.layout.Dimension(v[s]);if(u){t.push(u)}}v=t;return v.length?v:null};return function(){var y=[],x=[],z,t=false,s=false,A=false;q.columns=p(q.columns);q.rows=p(q.rows);q.filters=p(q.filters);if(!(q&&Ext.isObject(q))){console.log(dv.init.el+": Layout config is not an object");return}if(!q.columns){alert("No series dimension specified");return}if(!q.rows){alert("No category dimension specified");return}if(!q.filters){alert("No filter dimensions specified");return}for(var v=0,w,z=[].concat(q.columns,q.rows,q.filters);v<z.length;v++){w=z[v];if(w){if(Ext.isString(w.dimension)){x.push(w.dimension)}if(w.dimension===n.organisationUnit.objectName&&Ext.isArray(w.items)){for(var u=0;u<w.items.length;u++){if(w.items[u].id==="USER_ORGUNIT"){t=true}else{if(w.items[u].id==="USER_ORGUNIT_CHILDREN"){s=true}else{if(w.items[u].id==="USER_ORGUNIT_GRANDCHILDREN"){A=true}}}}}}}if(!Ext.Array.contains(x,n.period.objectName)){alert("At least one period must be specified as series, category or filter");return}r.type=Ext.isString(q.type)?q.type.toLowerCase():k.finals.chart.column;r.columns=q.columns;r.rows=q.rows;r.filters=q.filters;r.showTrendLine=Ext.isBoolean(q.regression)?q.regression:(Ext.isBoolean(q.showTrendLine)?q.showTrendLine:false);r.showValues=Ext.isBoolean(q.showData)?q.showData:(Ext.isBoolean(q.showValues)?q.showValues:true);r.hideLegend=Ext.isBoolean(q.hideLegend)?q.hideLegend:false;r.hideTitle=Ext.isBoolean(q.hideTitle)?q.hideTitle:false;r.targetLineValue=Ext.isNumber(q.targetLineValue)?q.targetLineValue:null;r.targetLineTitle=Ext.isString(q.targetLineLabel)&&!Ext.isEmpty(q.targetLineLabel)?q.targetLineLabel:(Ext.isString(q.targetLineTitle)&&!Ext.isEmpty(q.targetLineTitle)?q.targetLineTitle:null);r.baseLineValue=Ext.isNumber(q.baseLineValue)?q.baseLineValue:null;r.baseLineTitle=Ext.isString(q.baseLineLabel)&&!Ext.isEmpty(q.baseLineLabel)?q.baseLineLabel:(Ext.isString(q.baseLineTitle)&&!Ext.isEmpty(q.baseLineTitle)?q.baseLineTitle:null);r.title=Ext.isString(q.title)&&!Ext.isEmpty(q.title)?q.title:null;r.domainAxisTitle=Ext.isString(q.domainAxisLabel)&&!Ext.isEmpty(q.domainAxisLabel)?q.domainAxisLabel:(Ext.isString(q.domainAxisTitle)&&!Ext.isEmpty(q.domainAxisTitle)?q.domainAxisTitle:null);r.rangeAxisTitle=Ext.isString(q.rangeAxisLabel)&&!Ext.isEmpty(q.rangeAxisLabel)?q.rangeAxisLabel:(Ext.isString(q.rangeAxisTitle)&&!Ext.isEmpty(q.rangeAxisTitle)?q.rangeAxisTitle:null);r.userOrganisationUnit=t;r.userOrganisationUnitChildren=s;r.userOrganisationUnitGrandChildren=A;r.parentGraphMap=Ext.isObject(q.parentGraphMap)?q.parentGraphMap:null;return Ext.clone(r)}()};m.response.Header=function(p){var q={};return function(){if(!Ext.isObject(p)){console.log("Header is not an object: "+p);return}if(!Ext.isString(p.name)){console.log("Header name is not text: "+p);return}if(!Ext.isBoolean(p.meta)){console.log("Header meta is not boolean: "+p);return}q.name=p.name;q.meta=p.meta;return Ext.clone(q)}()};m.response.Response=function(q){var p={};return function(){var s=[];if(!(q&&Ext.isObject(q))){alert("Data response invalid");return false}if(!(q.headers&&Ext.isArray(q.headers))){alert("Data response invalid");return false}for(var r=0,t;r<q.headers.length;r++){t=m.response.Header(q.headers[r]);if(t){s.push(t)}}q.headers=s;if(!q.headers.length){alert("No valid response headers");return}if(!(Ext.isArray(q.rows)&&q.rows.length>0)){alert("No values found");return false}if(q.headers.length!==q.rows[0].length){alert("Data invalid");return false}p.headers=q.headers;p.metaData=q.metaData;p.width=q.width;p.height=q.height;p.rows=q.rows;return p}()}}());(function(){i.layout={};i.layout.getObjectNameDimensionMap=function(s){var r={};if(Ext.isArray(s)&&s.length){for(var p=0,q;p<s.length;p++){q=m.layout.Dimension(s[p]);if(q){r[q.dimension]=q}}}return r};i.layout.getObjectNameDimensionItemsMap=function(s){var r={};if(Ext.isArray(s)&&s.length){for(var p=0,q;p<s.length;p++){q=m.layout.Dimension(s[p]);if(q){r[q.dimension]=q.items}}}return r};i.response={}}());(function(){l.getExtendedLayout=function(u){var u=Ext.clone(u),w={columns:[],rows:[],filters:[],columnObjectNames:[],columnDimensionNames:[],columnItems:[],columnIds:[],rowObjectNames:[],rowDimensionNames:[],rowItems:[],rowIds:[],axisDimensions:[],axisObjectNames:[],axisDimensionNames:[],sortedAxisDimensionNames:[],filterDimensions:[],filterObjectNames:[],filterDimensionNames:[],filterItems:[],filterIds:[],sortedFilterDimensions:[],dimensions:[],objectNames:[],dimensionNames:[],objectNameDimensionsMap:{},objectNameItemsMap:{},objectNameIdsMap:{},dimensionNameDimensionsMap:{},dimensionNameItemsMap:{},dimensionNameIdsMap:{},dimensionNameSortedIdsMap:{}};Ext.applyIf(w,u);if(u.columns){for(var s=0,t,v,p;s<u.columns.length;s++){t=u.columns[s];v=t.items;p={};p.dimension=t.dimension;p.objectName=t.dimension;p.dimensionName=n.objectNameMap[t.dimension].dimensionName;if(v){p.items=v;p.ids=[];for(var r=0;r<v.length;r++){p.ids.push(v[r].id)}}w.columns.push(p);w.columnObjectNames.push(p.objectName);w.columnDimensionNames.push(p.dimensionName);w.columnItems=w.columnItems.concat(p.items);w.columnIds=w.columnIds.concat(p.ids);w.axisDimensions.push(p);w.axisObjectNames.push(p.objectName);w.axisDimensionNames.push(n.objectNameMap[p.objectName].dimensionName);w.objectNameDimensionsMap[p.objectName]=p;w.objectNameItemsMap[p.objectName]=p.items;w.objectNameIdsMap[p.objectName]=p.ids}}if(u.rows){for(var s=0,t,v,p;s<u.rows.length;s++){t=u.rows[s];v=t.items;p={};p.dimension=t.dimension;p.objectName=t.dimension;p.dimensionName=n.objectNameMap[t.dimension].dimensionName;if(v){p.items=v;p.ids=[];for(var r=0;r<v.length;r++){p.ids.push(v[r].id)}}w.rows.push(p);w.rowObjectNames.push(p.objectName);w.rowDimensionNames.push(p.dimensionName);w.rowItems=w.rowItems.concat(p.items);w.rowIds=w.rowIds.concat(p.ids);w.axisDimensions.push(p);w.axisObjectNames.push(p.objectName);w.axisDimensionNames.push(n.objectNameMap[p.objectName].dimensionName);w.objectNameDimensionsMap[p.objectName]=p;w.objectNameItemsMap[p.objectName]=p.items;w.objectNameIdsMap[p.objectName]=p.ids}}if(u.filters){for(var s=0,t,v,p;s<u.filters.length;s++){t=u.filters[s];v=t.items;p={};p.dimension=t.dimension;p.objectName=t.dimension;p.dimensionName=n.objectNameMap[t.dimension].dimensionName;if(v){p.items=v;p.ids=[];for(var r=0;r<v.length;r++){p.ids.push(v[r].id)}}w.filters.push(p);w.filterDimensions.push(p);w.filterObjectNames.push(p.objectName);w.filterDimensionNames.push(n.objectNameMap[p.objectName].dimensionName);w.filterItems=w.filterItems.concat(p.items);w.filterIds=w.filterIds.concat(p.ids);w.objectNameDimensionsMap[p.objectName]=p;w.objectNameItemsMap[p.objectName]=p.items;w.objectNameIdsMap[p.objectName]=p.ids}}w.axisDimensionNames=Ext.Array.unique(w.axisDimensionNames);w.filterDimensionNames=Ext.Array.unique(w.filterDimensionNames);w.columnDimensionNames=Ext.Array.unique(w.columnDimensionNames);w.rowDimensionNames=Ext.Array.unique(w.rowDimensionNames);w.filterDimensionNames=Ext.Array.unique(w.filterDimensionNames);w.sortedAxisDimensionNames=Ext.clone(w.axisDimensionNames).sort();w.sortedFilterDimensions=j.array.sortDimensions(Ext.clone(w.filterDimensions));w.dimensions=[].concat(w.axisDimensions,w.filterDimensions);w.objectNames=[].concat(w.axisObjectNames,w.filterObjectNames);w.dimensionNames=[].concat(w.axisDimensionNames,w.filterDimensionNames);for(var s=0,q;s<w.dimensionNames.length;s++){q=w.dimensionNames[s];w.dimensionNameDimensionsMap[q]=[];w.dimensionNameItemsMap[q]=[];w.dimensionNameIdsMap[q]=[]}for(var s=0,p;s<w.dimensions.length;s++){p=w.dimensions[s];w.dimensionNameDimensionsMap[p.dimensionName].push(p);w.dimensionNameItemsMap[p.dimensionName]=w.dimensionNameItemsMap[p.dimensionName].concat(p.items);w.dimensionNameIdsMap[p.dimensionName]=w.dimensionNameIdsMap[p.dimensionName].concat(p.ids)}for(var x in w.dimensionNameIdsMap){if(w.dimensionNameIdsMap.hasOwnProperty(x)){w.dimensionNameSortedIdsMap[x]=Ext.clone(w.dimensionNameIdsMap[x]).sort()}}return w};l.getParamString=function(B,s){var w=s?B.sortedAxisDimensionNames:B.axisDimensionNames,C=s?B.sortedFilterDimensions:B.filterDimensions,p=s?B.dimensionNameSortedIdsMap:B.dimensionNameIdsMap,t="?",r=false,q=B.dimensionNameItemsMap,D=n.indicator.dimensionName;for(var x=0,u,A;x<w.length;x++){u=w[x];t+="dimension="+u;A=Ext.clone(p[u]);if(u===D){for(var v=0,z;v<A.length;v++){z=A[v].indexOf("-");if(z>0){r=true;A[v]=A[v].substr(0,z)}}A=Ext.Array.unique(A)}if(u!==n.category.dimensionName){t+=":"+A.join(";")}if(x<(w.length-1)){t+="&"}}if(r){t+="&dimension="+k.finals.dimension.category.dimensionName}if(Ext.isArray(C)&&C.length){for(var x=0,y;x<C.length;x++){y=C[x];t+="&filter="+y.dimensionName+":"+y.ids.join(";")}}return t};l.setSessionStorage=function(s,r,q){if(DV.isSessionStorage){var p=JSON.parse(sessionStorage.getItem("dhis2"))||{};p[s]=r;sessionStorage.setItem("dhis2",JSON.stringify(p));if(Ext.isString(q)){window.location.href=q}}};l.createChart=function(K,C,D,w){var y,t,G,u,L,N,r,z,J,F,M,v,E,s,I,H,B,A,p={},x,q;y=function(Y,O){var S=[].concat(Y.columns,Y.rows,Y.filters),ak=Y.objectNameDimensionsMap[n.organisationUnit.objectName],V=ak&&Ext.Array.contains(ak.ids,"USER_ORGUNIT"),am=ak&&Ext.Array.contains(ak.ids,"USER_ORGUNIT_CHILDREN"),aj=ak&&Ext.Array.contains(ak.ids,"USER_ORGUNIT_GRANDCHILDREN"),P=function(){if(ak&&Ext.isArray(ak.ids)){for(var ao=0;ao<ak.ids.length;ao++){if(ak.ids[ao].substr(0,5)==="LEVEL"){return true}}}return false}(),X=function(){if(ak&&Ext.isArray(ak.ids)){for(var ao=0;ao<ak.ids.length;ao++){if(ak.ids[ao].substr(0,8)==="OU_GROUP"){return true}}}return false}(),R=n.organisationUnit.objectName,an;for(var ag=0,ae,W,Z;ag<S.length;ag++){ae=S[ag];ae.items=[];W=O.metaData[ae.objectName];if(ae.dimensionName===R){if(V||am||aj){var ai,U,ab;if(V){ai=[{id:C.init.user.ou,name:O.metaData.names[C.init.user.ou]}]}if(am){U=[];for(var ad=0;ad<C.init.user.ouc.length;ad++){U.push({id:C.init.user.ouc[ad],name:O.metaData.names[C.init.user.ouc[ad]]})}U=C.util.array.sortObjectsByString(U)}if(aj){var Q=[].concat(C.init.user.ou,C.init.user.ouc),T=O.metaData[R];ab=[];for(var ad=0,aa;ad<T.length;ad++){aa=T[ad];if(!Ext.Array.contains(Q,aa)){ab.push({id:aa,name:O.metaData.names[aa]})}}ab=C.util.array.sortObjectsByString(ab)}ae.items=[].concat(ai||[],U||[],ab||[])}else{if(P||X){for(var ad=0,T=O.metaData[R],aa;ad<T.length;ad++){aa=T[ad];ae.items.push({id:aa,name:O.metaData.names[aa]})}ae.items=C.util.array.sortObjectsByString(ae.items)}else{ae.items=Ext.clone(Y.dimensionNameItemsMap[ae.dimensionName])}}}else{if(Ext.isArray(W)&&W.length){var ac=Ext.clone(O.metaData[ae.dimensionName]);for(var ad=0;ad<ac.length;ad++){ae.items.push({id:ac[ad],name:O.metaData.names[ac[ad]]})}}else{ae.items=Ext.clone(Y.objectNameItemsMap[ae.objectName])}}}an=C.api.layout.Layout(Y);if(an){S=[].concat(an.columns||[],an.rows||[],an.filters||[]);for(var ag=0,af=O.metaData.names,ah;ag<S.length;ag++){ah=S[ag].items;if(Ext.isArray(ah)&&ah.length){for(var ad=0,al;ad<ah.length;ad++){al=ah[ad];if(Ext.isObject(al)&&Ext.isString(af[al.id])&&!Ext.isString(al.name)){al.name=af[al.id]||""}}}}return l.getExtendedLayout(an)}return null};t=function(S,R){S.nameHeaderMap={};S.idValueMap={};ids=[];var T=function(){for(var U=0,V;U<S.headers.length;U++){V=S.headers[U];V.index=U;if(V.meta){V.items=Ext.clone(R.dimensionNameIdsMap[V.name])||[];V.size=V.items.length;ids=ids.concat(V.items)}}for(var U=0,V;U<S.headers.length;U++){V=S.headers[U];S.nameHeaderMap[V.name]=V}}();var Q=function(){for(var U=0,W,V;U<ids.length;U++){W=ids[U];if(W.indexOf("-")!==-1){V=W.split("-");S.metaData.names[W]=S.metaData.names[V[0]]+" "+S.metaData.names[V[1]]}}}();var P=function(){var X=S.nameHeaderMap[k.finals.dimension.value.value].index,ab=S.nameHeaderMap[k.finals.dimension.category.dimensionName],Z=R.axisDimensionNames,W=[];for(var V=0;V<Z.length;V++){W.push(S.nameHeaderMap[Z[V]].index);if(ab&&Z[V]===k.finals.dimension.data.dimensionName){W.push(ab.index)}}for(var V=0,Y,aa;V<S.rows.length;V++){Y=S.rows[V];aa="";for(var U=0;U<W.length;U++){aa+=Y[W[U]]}S.idValueMap[aa]=parseFloat(Y[X])}}();var O=function(){var W=S.nameHeaderMap.value.index,U=[];for(var V=0;V<S.rows.length;V++){U.push(parseFloat(S.rows[V][W]))}S.min=Ext.Array.min(U);S.max=Ext.Array.max(U)}();return S};G=function(O){if(!Ext.isString(O)||O.length>2000){var P=((O.length-2000)/O.length)*100;alert("Too many parameters selected. Please reduce the number of parameters by at least "+P.toFixed(0)+"%.");return}return true};u=function(U,X){var ae=k.finals.dimension.period.dimensionName,P=X.columns[0].dimensionName,T=X.rows[0].dimensionName,af=[],O=X.columnIds,S=X.rowIds,Q=[],ad=[],R=[],V;for(var ac=0,W,Z;ac<S.length;ac++){W={};Z=S[ac];W[k.finals.data.domain]=U.metaData.names[Z];for(var aa=0,Y;aa<O.length;aa++){Y=j.str.replaceAll(O[aa],"-","")+j.str.replaceAll(S[ac],"-","");W[O[aa]]=U.idValueMap[Y]}af.push(W)}if(X.showTrendLine){for(var ac=0,ab,ag;ac<O.length;ac++){ab=new b();ag=k.finals.data.trendLine+O[ac];for(var aa=0;aa<af.length;aa++){ab.addData(aa,af[aa][O[ac]])}for(var aa=0;aa<af.length;aa++){af[aa][ag]=parseFloat(ab.predict(aa).toFixed(1))}Q.push(ag);U.metaData.names[ag]=DV.i18n.trend+" ("+U.metaData.names[O[ac]]+")"}}if(Ext.isNumber(X.targetLineValue)||Ext.isNumber(parseFloat(X.targetLineValue))){for(var ac=0;ac<af.length;ac++){af[ac][k.finals.data.targetLine]=parseFloat(X.targetLineValue)}ad.push(k.finals.data.targetLine)}if(Ext.isNumber(X.baseLineValue)||Ext.isNumber(parseFloat(X.baseLineValue))){for(var ac=0;ac<af.length;ac++){af[ac][k.finals.data.baseLine]=parseFloat(X.baseLineValue)}R.push(k.finals.data.baseLine)}V=Ext.create("Ext.data.Store",{fields:function(){var ah=Ext.clone(O);ah.push(k.finals.data.domain);ah=ah.concat(Q,ad,R);return ah}(),data:af});V.rangeFields=O;V.domainFields=[k.finals.data.domain];V.trendLineFields=Q;V.targetLineFields=ad;V.baseLineFields=R;V.numericFields=[].concat(V.rangeFields,V.trendLineFields,V.targetLineFields,V.baseLineFields);V.getMaximum=function(){var ai=[];for(var ah=0;ah<V.numericFields.length;ah++){ai.push(V.max(V.numericFields[ah]))}return Ext.Array.max(ai)};V.getMinimum=function(){var ai=[];for(var ah=0;ah<V.numericFields.length;ah++){ai.push(V.max(V.numericFields[ah]))}return Ext.Array.min(ai)};V.getMaximumSum=function(){var ai=[],ah=0;V.each(function(aj){ah=0;for(var ak=0;ak<V.rangeFields.length;ak++){ah+=aj.data[V.rangeFields[ak]]}ai.push(ah)});return Ext.Array.max(ai)};if(DV.isDebug){console.log("data",af);console.log("rangeFields",V.rangeFields);console.log("domainFields",V.domainFields);console.log("trendLineFields",V.trendLineFields);console.log("targetLineFields",V.targetLineFields);console.log("baseLineFields",V.baseLineFields)}return V};L=function(R,V,Q){var P=k.finals.chart,T=R.getMinimum(),U,S;if((Q.type===P.stackedcolumn||Q.type===P.stackedbar)&&(Q.showTrendLine||Q.targetLineValue||Q.baseLineValue)){var O=[R.getMaximum(),R.getMaximumSum()];U=Math.ceil(Ext.Array.max(O)*1.1);U=Math.floor(U/10)*10}S={type:"Numeric",position:"left",fields:R.numericFields,minimum:T<0?T:0,label:{renderer:Ext.util.Format.numberRenderer("0,0")},grid:{odd:{opacity:1,stroke:"#aaa","stroke-width":0.1},even:{opacity:1,stroke:"#aaa","stroke-width":0.1}}};if(U){S.maximum=U}if(Q.rangeAxisTitle){S.title=Q.rangeAxisTitle}return S};N=function(P,O){var Q={type:"Category",position:"bottom",fields:P.domainFields,label:{rotate:{degrees:330}}};if(O.domainAxisTitle){Q.title=O.domainAxisTitle}return Q};r=function(P,S){var O=[];for(var Q=0,T,R;Q<P.rangeFields.length;Q++){T=P.rangeFields[Q];O.push(S.metaData.names[T])}return O};z=function(Q,R,P){var O={type:"column",axis:"left",xField:Q.domainFields,yField:Q.rangeFields,style:{opacity:0.8,lineWidth:3},markerConfig:{type:"circle",radius:4},tips:v(),title:r(Q,R)};if(P.showValues){O.label={display:"outside","text-anchor":"middle",field:Q.rangeFields,font:k.chart.style.fontFamily}}return O};J=function(P,R){var O=[];for(var Q=0;Q<P.trendLineFields.length;Q++){O.push({type:"line",axis:"left",xField:P.domainFields,yField:P.trendLineFields[Q],style:{opacity:0.8,lineWidth:3,"stroke-dasharray":8},markerConfig:{type:"circle",radius:0},title:R.metaData.names[P.trendLineFields[Q]]})}return O};F=function(P,O){return{type:"line",axis:"left",xField:P.domainFields,yField:P.targetLineFields,style:{opacity:1,lineWidth:2,"stroke-width":1,stroke:"#041423"},showMarkers:false,title:(Ext.isString(O.targetLineTitle)?O.targetLineTitle:DV.i18n.target)+" ("+O.targetLineValue+")"}};M=function(P,O){return{type:"line",axis:"left",xField:P.domainFields,yField:P.baseLineFields,style:{opacity:1,lineWidth:2,"stroke-width":1,stroke:"#041423"},showMarkers:false,title:(Ext.isString(O.baseLineTitle)?O.baseLineTitle:DV.i18n.base)+" ("+O.baseLineValue+")"}};v=function(){return{trackMouse:true,cls:"dv-chart-tips",renderer:function(O,P){this.update('<div style="text-align:center"><div style="font-size:17px; font-weight:bold">'+P.value[1]+'</div><div style="font-size:10px">'+O.data[k.finals.data.domain]+"</div></div>")}}};E=function(Q,P){var O=k.chart.theme.dv1.slice(0,Q.rangeFields.length);if(P.targetLineValue||P.baseLineValue){O.push("#051a2e")}if(P.targetLineValue){O.push("#051a2e")}if(P.baseLineValue){O.push("#051a2e")}Ext.chart.theme.dv1=Ext.extend(Ext.chart.theme.Base,{constructor:function(R){Ext.chart.theme.Base.prototype.constructor.call(this,Ext.apply({seriesThemes:O,colors:O},R))}})};s=function(Z,W,ac){var U=30,T=7,aa,ab=0,V="",Q,Y=false,S="top",X=0;if(W.type===k.finals.chart.pie){aa=Z.getCount();Z.each(function(ad){V+=ad.data[Z.domainFields[0]]})}else{aa=Z.rangeFields.length;for(var R=0,P,O;R<Z.rangeFields.length;R++){if(Z.rangeFields[R].indexOf("-")!==-1){O=Z.rangeFields[R].split("-");P=ac.metaData.names[O[0]]+" "+ac.metaData.names[O[1]]}else{P=ac.metaData.names[Z.rangeFields[R]]}V+=P}}ab=V.length;Q=(aa*U)+(ab*T);if(Q>C.viewport.centerRegion.getWidth()-50){Y=true;S="right"}if(S==="right"){X=5}return Ext.create("Ext.chart.Legend",{position:S,isVertical:Y,labelFont:"13px "+k.chart.style.fontFamily,boxStroke:"#ffffff",boxStrokeWidth:0,padding:X})};I=function(Q,V,P){var S=P.filterIds,O=[],U="",T;if(P.type===k.finals.chart.pie){S=S.concat(P.columnIds)}if(Ext.isArray(S)&&S.length){for(var R=0;R<S.length;R++){U+=V.metaData.names[S[R]];U+=R<S.length-1?", ":""}}if(P.title){U=P.title}T=(C.viewport.centerRegion.getWidth()/U.length)<11.6?13:18;return Ext.create("Ext.draw.Sprite",{type:"text",text:U,font:"bold "+T+"px "+k.chart.style.fontFamily,fill:"#111",height:20,y:20})};H=function(){return function(){this.animate=false;this.setWidth(C.viewport.centerRegion.getWidth());this.setHeight(C.viewport.centerRegion.getHeight()-25);this.animate=true}};B=function(){return function(){if(this.items){var S=this.items[0],P=this.legend,R,O;if(this.legend.position==="top"){R=P.x+(P.width/2);O=R-(S.el.getWidth()/2)}else{var Q=P?P.width:0;O=(this.width/2)-(S.el.getWidth()/2)}S.setAttributes({x:O},true)}}};A=function(P,U,R,V,O,T){var S,Q={renderTo:C.init.el,store:P,axes:U,series:R,animate:true,shadow:false,insetPadding:35,width:C.viewport.centerRegion.getWidth(),height:C.viewport.centerRegion.getHeight()-25,theme:T||"dv1"};if(!O.hideLegend){Q.legend=s(P,O,V);if(Q.legend.position==="right"){Q.insetPadding=40}}if(!O.hideTitle){Q.items=[I(P,V,O)]}else{Q.insetPadding=10}S=Ext.create("Ext.chart.Chart",Q);S.setChartSize=H();S.setTitlePosition=B();S.onViewportResize=function(){S.setChartSize();S.redraw();S.setTitlePosition()};S.on("afterrender",function(){S.setTitlePosition()});return S};p.column=function(T,P){var O=u(T,P),U=L(O,T,P),S=N(O,P),R=[U,S],Q=[z(O,T,P)];if(P.showTrendLine){Q=J(O,T).concat(Q)}if(P.targetLineValue){Q.push(F(O,P))}if(P.baseLineValue){Q.push(M(O,P))}E(O,P);return A(O,R,Q,T,P)};p.stackedcolumn=function(S,O){var Q=this.column(S,O);for(var P=0,R;P<Q.series.items.length;P++){R=Q.series.items[P];if(R.type===k.finals.chart.column){R.stacked=true}}return Q};p.bar=function(Z,W){var X=u(Z,W),S=L(X,Z,W),T=N(X,W),V,R=z(X,Z,W),O,P,Y,U;S.position="bottom";T.position="left";V=[S,T];R.type="bar";R.axis="bottom";if(W.showValues){R.label={display:"outside","text-anchor":"middle",field:X.rangeFields}}R=[R];if(W.showTrendLine){O=J(X,Z);for(var Q=0;Q<O.length;Q++){O[Q].axis="bottom";O[Q].xField=X.trendLineFields[Q];O[Q].yField=X.domainFields}R=O.concat(R)}if(W.targetLineValue){P=F(X,W);P.axis="bottom";P.xField=X.targetLineFields;P.yField=X.domainFields;R.push(P)}if(W.baseLineValue){Y=M(X,W);Y.axis="bottom";Y.xField=X.baseLineFields;Y.yField=X.domainFields;R.push(Y)}E(X,W);return A(X,V,R,Z,W)};p.stackedbar=function(S,O){var Q=this.bar(S,O);for(var P=0,R;P<Q.series.items.length;P++){R=Q.series.items[P];if(R.type===k.finals.chart.bar){R.stacked=true}}return Q};p.line=function(Y,V){var W=u(Y,V),R=L(W,Y,V),S=N(W,V),U=[R,S],Q=[],O=k.chart.theme.dv1.slice(0,W.rangeFields.length),T=r(W,Y);for(var P=0,X;P<W.rangeFields.length;P++){X={type:"line",axis:"left",xField:W.domainFields,yField:W.rangeFields[P],style:{opacity:0.8,lineWidth:3},markerConfig:{type:"circle",radius:4},tips:v(),title:T[P]};Q.push(X)}if(V.showTrendLine){Q=J(W,Y).concat(Q);O=O.concat(O)}if(V.targetLineValue){Q.push(F(W,V));O.push("#051a2e")}if(V.baseLineValue){Q.push(M(W,V));O.push("#051a2e")}Ext.chart.theme.dv1=Ext.extend(Ext.chart.theme.Base,{constructor:function(Z){Ext.chart.theme.Base.prototype.constructor.call(this,Ext.apply({seriesThemes:O,colors:O},Z))}});return A(W,U,Q,Y,V)};p.area=function(T,P){var O=u(T,P),U=L(O,T,P),S=N(O,P),R=[U,S],Q=z(O,T,P);Q.type="area";Q.style.opacity=0.7;Q.style.lineWidth=0;delete Q.label;delete Q.tips;Q=[Q];if(P.showTrendLine){Q=J(O,T).concat(Q)}if(P.targetLineValue){Q.push(F(O,P))}if(P.baseLineValue){Q.push(M(O,P))}E(O,P);return A(O,R,Q,T,P)};p.pie=function(U,Q){var P=u(U,Q),S,O,T,R={field:k.finals.data.domain};if(Q.showValues){R.display="middle";R.contrast=true;R.font="14px "+k.chart.style.fontFamily;R.renderer=function(W){var V=P.getAt(P.findExact(k.finals.data.domain,W));return V.data[P.rangeFields[0]]}}S=[{type:"pie",field:P.rangeFields[0],donut:7,showInLegend:true,highlight:{segment:{margin:5}},label:R,style:{opacity:0.8,stroke:"#555"},tips:{trackMouse:true,cls:"dv-chart-tips",renderer:function(V){this.update('<div style="text-align:center"><div style="font-size:17px; font-weight:bold">'+V.data[P.rangeFields[0]]+'</div><div style="font-size:10px">'+V.data[k.finals.data.domain]+"</div></div>")}}}];O=k.chart.theme.dv1.slice(0,U.nameHeaderMap[Q.rowDimensionNames[0]].items.length);Ext.chart.theme.dv1=Ext.extend(Ext.chart.theme.Base,{constructor:function(V){Ext.chart.theme.Base.prototype.constructor.call(this,Ext.apply({seriesThemes:O,colors:O},V))}});T=A(P,null,S,U,Q);T.insetPadding=40;T.shadow=true;return T};p.radar=function(W,U){var V=u(W,U),R=[],P=[],T=r(V,W),S;R.push({type:"Radial",position:"radial",label:{display:true}});for(var Q=0,O;Q<V.rangeFields.length;Q++){O={showInLegend:true,type:"radar",xField:V.domainFields,yField:V.rangeFields[Q],style:{opacity:0.5},tips:v(),title:T[Q]};if(U.showValues){O.label={display:"over",field:V.rangeFields[Q]}}P.push(O)}S=A(V,R,P,W,U,"Category2");S.insetPadding=40;S.height=C.viewport.centerRegion.getHeight()-80;S.setChartSize=function(){this.animate=false;this.setWidth(C.viewport.centerRegion.getWidth());this.setHeight(C.viewport.centerRegion.getHeight()-80);this.animate=true};return S};x=function(P,O,Q){if(C.isPlugin){}else{if(DV.isSessionStorage){l.setSessionStorage("chart",P)}if(D){C.viewport.setGui(P,O,D,w)}}j.mask.hideMask(C.viewport.centerRegion);C.layout=P;C.xLayout=O;C.xResponse=Q;if(DV.isDebug){console.log("xResponse",Q);console.log("xLayout",O);console.log("layout",P)}};q=function(){var O=l.getExtendedLayout(K),Q=l.getParamString(O,true),R="GET",P;P=function(S){var V,U,T,S=C.api.response.Response(S);if(!S){C.util.mask.hideMask(C.viewport.centerRegion);return}O=y(O,S);if(!O){C.util.mask.hideMask(C.viewport.centerRegion);return}V=t(S,O);Ext.get(C.init.el).dom.innerHTML="";U=p[O.type](V,O);C.paramString=Q;x(K,O,V)};if(!G(o.contextPath+"/api/analytics.jsonp"+Q)){return}j.mask.showMask(C.viewport.centerRegion);if(C.isPlugin){Ext.data.JsonP.request({method:R,url:o.contextPath+"/api/analytics.jsonp"+Q,disableCaching:false,success:P})}else{Ext.Ajax.request({method:R,url:o.contextPath+"/api/analytics.json"+Q,timeout:60000,headers:{"Content-Type":"application/json",Accept:"application/json"},disableCaching:false,failure:function(S){j.mask.hideMask(C.viewport.centerRegion);alert(S.responseText)},success:function(S){P(Ext.decode(S.responseText))}})}}()};l.loadChart=function(s,q,v,x){var r=o.contextPath+"/api/charts/"+s,u="?viewClass=dimensional&links=false",p="GET",w,t;if(!Ext.isString(s)){alert("Invalid id");return}w=function(z){var y=m.layout.Layout(z);if(y){q.favorite=Ext.clone(y);q.favorite.id=z.id;q.favorite.name=z.name;l.createChart(y,q,v,x)}};t=function(y){j.mask.hideMask(q.viewport.centerRegion);alert(y)};if(q.isPlugin){Ext.data.JsonP.request({url:r+".jsonp"+u,method:p,failure:function(y){t(y)},success:function(y){w(y)}})}else{Ext.Ajax.request({url:r+".json"+u,method:p,failure:function(y){t(y.responseText)},success:function(y){w(Ext.decode(y.responseText))}})}};l.analytical2layout=function(q){var t=n.category.objectName,s=Ext.clone(q);q=Ext.clone(q);s.columns=[];s.rows=[];s.filters=s.filters||[];if(Ext.isArray(q.columns)&&q.columns.length){for(var p=0,r;p<q.columns.length;p++){r=q.columns[p];if(r.dimension===t){continue}if(!s.columns.length){s.columns.push(r)}else{if(r.dimension===n.indicator.objectName||(p===q.columns.length-1)){s.filters.push(s.columns.pop());s.columns=[r]}else{s.filters.push(r)}}}}if(Ext.isArray(q.rows)&&q.rows.length){for(var p=0,r;p<q.rows.length;p++){r=q.rows[p];if(r.dimension===t){continue}if(!s.rows.length){s.rows.push(r)}else{if(r.dimension===n.indicator.objectName||(p===q.rows.length-1)){s.filters.push(s.rows.pop());s.rows=[r]}else{s.filters.push(r)}}}}return s}}());DV.core.instances.push({conf:k,util:j,init:o,api:m,service:i,engine:l});return DV.core.instances[DV.core.instances.length-1]};var d=".dv-chart-tips { border-radius: 2px; padding: 0px 3px 1px; border: 2px solid #777; background-color: #f1f1f1; } \n";d+=".dv-chart-tips .x-tip-body { background-color: #f1f1f1; font-size: 13px; font-weight: normal; color: #444; -webkit-text-stroke: 0; } \n";d+=".dv-chart-tips .x-tip-body div { font-family: arial,sans-serif,ubuntu,consolas !important; } \n";d+=".x-mask-msg { padding: 0; \n	border: 0 none; background-image: none; background-color: transparent; } \n";d+=".x-mask-msg div { background-position: 11px center; } \n";d+=".x-mask-msg .x-mask-loading { border: 0 none; \n background-color: #000; color: #fff; border-radius: 2px; padding: 12px 14px 12px 30px; opacity: 0.65; } \n";Ext.util.CSS.createStyleSheet(d);DV.i18n={target:"Target",base:"Base",trend:"Trend"};DV.plugin={};var g={user:{}},f=[],h=false,c=false,a,e;a=function(j){var o=false,n=[],m=0,l;l=function(){if(++m===n.length){c=true;for(var p=0;p<f.length;p++){e(f[p])}f=[]}};n.push({url:j+"/api/system/context.jsonp",success:function(i){g.contextPath=i.contextPath;l()}});n.push({url:j+"/api/organisationUnits.jsonp?userOnly=true&viewClass=detailed&links=false",success:function(q){var p=q.organisationUnits||[];if(p.length){var i=p[0];if(i.id){g.user={ou:i.id};g.user.ouc=i.children?Ext.Array.pluck(i.children,"id"):null}}else{console.log("User is not assigned to any organisation units")}l()}});n.push({url:j+"/api/dimensions.jsonp?links=false&paging=false",success:function(i){g.dimensions=Ext.isArray(i.dimensions)?i.dimensions:[];l()}});for(var k=0;k<n.length;k++){Ext.data.JsonP.request(n[k])}};e=function(l){var n,k,j,i,m;n=function(o){if(!Ext.isObject(o)){console.log("Chart configuration is not an object");return}if(!Ext.isString(o.el)){console.log("No element id provided");return}o.id=o.id||o.uid;return true};k=function(p){var o=p.util||{},q=p.init||{};q.el=l.el};j=function(){var r=Ext.get(m.init.el),u,o,v=parseInt(r.getStyle("border-left-width"))+parseInt(r.getStyle("border-right-width")),s=parseInt(r.getStyle("border-top-width"))+parseInt(r.getStyle("border-bottom-width")),t=parseInt(r.getStyle("padding-left"))+parseInt(r.getStyle("padding-right")),p=parseInt(r.getStyle("padding-top"))+parseInt(r.getStyle("padding-bottom")),q=r.getWidth()-v-t,w=r.getHeight()-s-p;u=function(x){m.engine.createChart(x,m)};o=Ext.get(l.el);o.setWidth(l.width||q);o.setHeight(l.height||w);return{setFavorite:u,centerRegion:o}};i=function(){if(!n(l)){return}m=DV.core.getInstance(Ext.clone(g));k(m);m.isPlugin=true;m.viewport=j();if(l.id){m.engine.loadChart(l.id,m)}else{layout=m.api.layout.Layout(l);if(!layout){return}m.engine.createChart(layout,m)}}()};DV.plugin.getChart=function(i){if(Ext.isString(i.url)&&i.url.split("").pop()==="/"){i.url=i.url.substr(0,i.url.length-1)}if(c){e(i)}else{f.push(i);if(!h){h=true;a(i.url)}}};DHIS=Ext.isObject(window.DHIS)?DHIS:{};DHIS.getChart=DV.plugin.getChart});
