(this["webpackJsonphw-cad-tools"]=this["webpackJsonphw-cad-tools"]||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports={documentationContentBlock:"DocumentationContentBlock_documentationContentBlock__3QuOq",odd:"DocumentationContentBlock_odd__2FVAc",even:"DocumentationContentBlock_even__-G4MM",commandName:"DocumentationContentBlock_commandName__3QgoD",shortcut:"DocumentationContentBlock_shortcut__pWdUj",input:"DocumentationContentBlock_input__3NlGt",output:"DocumentationContentBlock_output__2tnOZ",useCase:"DocumentationContentBlock_useCase__3QGAJ"}},,function(e,t,o){e.exports={sideNav:"SideNav_sideNav__1ZDpT",sideNav__title:"SideNav_sideNav__title__19Ak4",sideNav__category:"SideNav_sideNav__category__1g87J",link:"SideNav_link__2SzdO"}},,function(e){e.exports=JSON.parse('[{"id":"NMTVw3wHFAA","title":"HW 3D Face","summary":"Draws a flat grouping of four-sided 3D faces by clicking perimeter points","commandName":"hw3dface","lspFileNames":["hw3dface.lsp"],"category":"3D Face Commands","shortcut":"3f"},{"id":"DlCabR1WMDs","title":"HW 3D Face Spiderweb","summary":"Draws a flat grouping of three-sided 3D faces by clicking perimeter points","commandName":"hw3dface_spiderweb","lspFileNames":["hw3dface_spiderweb.lsp"],"category":"3D Face Commands","shortcut":"sd"},{"id":"wrBFOnU1tik","title":"HW Add Nodes","summary":"(For use only in matrix files) Adds middle and exterior nodes on every CAD symbol in a matrix file.","commandName":"hwaddnodes","lspFileNames":["hwaddnodes.lsp"],"category":"Construction Line Commands","shortcut":""},{"id":"PCQkiFdAw3o","title":"HW Bridge Mesh","summary":"Connects two non-adjacent polygon meshes.","commandName":"hwbridgemesh","lspFileNames":["hwbridgemesh,lsp"],"category":"Polygon Mesh Commands","shortcut":"bb"},{"id":"j637HrxWS6g","title":"HW Check Mesh","summary":"Quality-checks the normal facing of 3D faces and polygon meshes.","commandName":"hwcheckmesh","lspFileNames":["hwcheckmesh.lsp"],"category":"Quality Checking Commands","shortcut":"ch"},{"id":"NATsPEB2w1I","title":"HW Combine Mesh","summary":"Combines two adjacent polygon meshes together into one.","commandName":"hwcombinemesh","lspFileNames":["hwcombinemesh.lsp"],"category":"Polygon Mesh Commands","shortcut":"c"},{"id":"hSqyj6HPmNs","title":"HW Cut Mesh","summary":"Separates one polygon mesh into two (along an edge).","commandName":"hwcutmesh","lspFileNames":["hwcutmesh.lsp"],"category":"Polygon Mesh Commands","shortcut":"xx"},{"id":"inxbj09hasY","title":"HW Draw Splines","summary":"Maps splines onto a collection of round or rectangular surface entities (like a lounge chair seat or sofa cushion).","commandName":"hwdrawsplines","lspFileNames":["hwsurfacttopolygonmesh_disc.lsp"],"category":"Construction Line Commands","shortcut":""},{"id":"R-eopwfbxaM","title":"HW Draw Table Top","summary":"Draws a table top (3D faces) onto an existing table edge.","commandName":"hwdrawtabletop","lspFileNames":["hwdrawtabletop.lsp"],"category":"Polygon Mesh Commands","shortcut":""},{"id":"cnb3NC2rSNc","title":"HW Edge","summary":"Hides edges on 3D faces. Specifically, this command quality-checks all targeted 3D faces by hiding the interior edges of adjacent 3D faces (only affects groupings of 3D faces that comprise flat surfaces).","commandName":"hwedge","lspFileNames":["hwedge.lsp"],"category":"Quality Checking Commands","shortcut":""},{"id":"MRfTtyMo3o4","title":"HW Edgesurf","summary":"Creates a polygon mesh based on four input splines (works similarly to AutoCAD\'s native EDGESURF command, only this command allows for a small \'fuzz-factor\' between splines. And this command allow you to edit the surf. tab counts immediately after placing it).","commandName":"hwedgesurf","lspFileNames":["es.lsp"],"category":"Polygon Mesh Commands","shortcut":"es"},{"id":"Bk6Z99F4H_k","title":"HW Join","summary":"Creates a spline from two or more adjacent splines (works similarly to AutoCAD\'s native JOIN command, only this command allows for a small \'fuzz-factor\' between splines. ","commandName":"hwjoin","lspFileNames":["hwjoin.lsp"],"category":"Construction Line Commands","shortcut":"hwj"},{"id":"jPKWWpC1UE8","title":"HW Macro Stretch","summary":"(For use only in matrix files) Simultaneously applies a stretch to many symbols in a matrix file. Useful for instance, when you need to change the depth of many wardrobes (or similar item) in a matrix.","commandName":"hwmacro_stretch","lspFileNames":["hwmacro_stretch.lsp"],"category":"Matrix File Macros","shortcut":""},{"id":"3OrrQJsm4xk","title":"HW Mesh Recast","summary":"Changes the surf. tab count of a polygon mesh. Allows you to smooth rough transitions. This command can be used in with HW Cut Mesh and HW Bridge Mesh to mold your meshes into rounded, organic-shaped designs. Warning: this command fundamentally changes the target mesh in a way that is difficult to undo.","commandName":"hwmeshrecast","lspFileNames":["hwmeshrecast.lsp"],"category":"Polygon Mesh Commands","shortcut":"me"},{"id":"xuU_w495pI8","title":"HW Seam Builder","summary":"Changes the shape of the target mesh to show seam lines. This command can be used in conjunction with HW Define New Seam to create a custom seam shape.","commandName":"hwseambuilder_main","lspFileNames":["hwseambuilder_main","hwseambuilder_defineseam"],"category":"Polygon Mesh Commands","shortcut":"se"},{"id":"x7ICBFMp9Qk","title":"HW Surface to Polygon Mesh: 3-Sided","summary":"Creates a polygon mesh from a three-sided surface entity. ","commandName":"hwsurfacetopolygonmesh_3_sided","lspFileNames":["hwsurfacetopolygonmesh_3_sided.lsp"],"category":"Polygon Mesh Commands","shortcut":""},{"id":"aByISB3KY88","title":"HW Surface to Polygon Mesh: Disc","summary":"Creates a polygon mesh from a collection of ring-shaped, or disc-shaped surface entities. ","commandName":"hwsurfacetopolygonmesh_disc","lspFileNames":["hwsurfacetopolygonmesh_disc.lsp"],"category":"Polygon Mesh Commands","shortcut":""},{"id":"zu_qFTEtWFY","title":"HW Surface to Polygon Mesh: Multiple","summary":"Attempts to create polygon meshes from simple surface entities.","commandName":"hwsurfacetopolygonmesh_multiple","lspFileNames":["hwsurfacetopolygonmesh_multiple.lsp"],"category":"Polygon Mesh Commands","shortcut":""},{"id":"oknToZKv2Zc","title":"HW Swap and Stretch","summary":"(For use only in matrix files) Substitutes a selected collection of polygon meshes / 3D faces for another, and subsequently stretches the size. This command was originally designed to quickly change our \'proud-back\' wardrobes into \'inset-back\'. Note: this command can be modified for other applications. So please make a request if you run into a situation where you have a large matrix and you need to make a small \'swap\' modification on all items in the matrix. Many times these issues can be solved with a script faster (and cheaper) than outsourcing the work to another company. ","commandName":"hwswapandstretch","lspFileNames":["hwswapandstretch.lsp"],"category":"Matrix File Macros","shortcut":""},{"id":"R5uVKHVJ9rE","title":"Setting up your _hwloadall File","summary":"The load file sets specified scripts to load into AutoCAD immediately on start up. This gives you access to these commands via command-line every time you use AutoCAD.","commandName":"","lspFileNames":[""],"category":"Getting Started","shortcut":""},{"id":"hpVAudDeVo0","title":"How to Smooth out a Curve","summary":"Example uses HW Cut Mesh, HW Combine Mesh, HW Half Mesh, HW Bridge Mesh, and HW Mesh Recast to smooth out a rough bump in a seat cushion.","commandName":"","lspFileNames":["hwcutmesh","hwcombinemesh","hwhalfmesh","hwbridgemesh","hwmeshrecast"],"category":"Drafting Tutorials","shortcut":""},{"id":"CAY2wXEumMo","title":"How to Round out a Corner on a Sofa Cushion","summary":"Example uses HW Cut Mesh, HW Combine Mesh, HW Half Mesh, HW Bridge Mesh, and HW Mesh Recast to create the corner on a sofa cushion.","commandName":"","lspFileNames":["hwcutmesh","hwcombinemesh","hwhalfmesh","hwbridgemesh","hwmeshrecast"],"category":"Drafting Tutorials","shortcut":""}]')},function(e,t,o){e.exports={codeSnippet:"ShortcutInstructions_codeSnippet__2pJBa",commandShortcut:"ShortcutInstructions_commandShortcut__3ArGz"}},,,function(e,t,o){e.exports={topnav:"Navbar_topnav__3Af9b",active:"Navbar_active__3BiYV",icon:"Navbar_icon__3fowD",topnav__brand:"Navbar_topnav__brand__1coSY"}},,,function(e){e.exports=JSON.parse('[{"id":"hwzapmesh","name":"HW Zap Mesh","shortcut":"hwzapmesh, za","inputs":["<Point>: a vertex of the mesh facet to be removed.","<Point>: a vertex adjacent to the first picked point. "],"output":"<Polygon Mesh>: a mesh with the selected facet removed. ","commandUseCases":["Sometimes a polygon mesh can afford to lose a few facets without negatively affecting the overall look of the CAD symbol. Reducing a mesh\'s facet count in this way can reduce the overall file size of the symbol. "]},{"id":"hwcombinemesh","name":"HW Combine Mesh","shortcut":"hwcombinemesh, c","inputs":["<Polygon Mesh>: any.","<Polygon Mesh>: must be adjacent to the first one."],"output":"<Polygon Mesh>: a combination of the original two input meshes.","commandUseCases":["Some products look more true-to-life if they are built with a single polygon mesh rather than multiple separate ones. For example, trim around a rectangular table is often best represented with a single mesh rather than being split into a separate mesh for each of the four sides. "]},{"id":"hwbridgemesh","name":"HW Bridge Mesh","shortcut":"hwbridgemesh, bb, bb2, bb4, bb8, bb16","inputs":["<Polygon Mesh>: first mesh.","<Point>: first vertex of the mesh #1.","<Point>: second vertex of the mesh #1 (must be adjacent to the first vertex).","<Point>: third vertex of the mesh #1 (must be adjacent to the second vertex, but not adjacent to the second so as to make an L-shape with the three picks).","<Polygon Mesh>: second mesh.","<Point>: first vertex of the mesh #2.","<Point>: second vertex of the mesh #2 (must be adjacent to the first vertex).","<Point>: third vertex of the mesh #2 (must be adjacent to the second vertex, but not adjacent to the second so as to make an L-shape with the three picks)."],"output":"<Polygon Mesh>: the combination of the two input meshes with a new edge joining the first mesh to the second.","commandUseCases":["Creating table tops: Bridge mesh lets you quickly create a flat table top by joining the first half of a table edge to its other half.","Creating meshes that span long distances."]}]')},function(e,t,o){e.exports={embeddedVideo:"EmbeddedVideo_embeddedVideo__agB2g"}},function(e,t,o){e.exports={codeSnippet:"LoadingInstructions_codeSnippet__3F97l",loadingInstructions:"LoadingInstructions_loadingInstructions__2PhKR"}},,,function(e,t,o){e.exports={footer:"Footer_footer__2NNgL",loadingInstructions:"Footer_loadingInstructions__WegNv",commandShortcut:"Footer_commandShortcut__2RM9R"}},function(e,t,o){e.exports={homeContentBlock:"HomeContentBlock_homeContentBlock__2b-bo"}},function(e,t,o){e.exports={tutorialContentBlock:"TutorialContentBlock_tutorialContentBlock__1YgPV"}},function(e,t,o){e.exports={downloadsContentBlock:"DownloadsContentBlock_downloadsContentBlock__1Os4S"}},function(e){e.exports=JSON.parse('[{"id":"d30698e3a97144703848ffae2f0d354d","title":"HW 3D Face","zipDownload":"https://gist.github.com/bentzen-andy/d30698e3a97144703848ffae2f0d354d/archive/8bec2ad7eaee2af8d22641c3872b2baa046211d0.zip"},{"id":"091c0d76c31f6153a175f9729956d603","title":"HW 3D Face Spiderweb","zipDownload":"https://gist.github.com/bentzen-andy/091c0d76c31f6153a175f9729956d603/archive/912a634199b433207123ab71e65a5e65b3122dee.zip"},{"id":"56c6d9c957ec173687a1adaf03acde7d","title":"HW Check Mesh","zipDownload":"https://gist.github.com/bentzen-andy/56c6d9c957ec173687a1adaf03acde7d/archive/11b77785db43cfb1d3590f4a2e5260f7922958a3.zip"},{"id":"fa75afdb8de4e593faf4094d4e4970f7","title":"HW Combine Mesh","zipDownload":"https://gist.github.com/bentzen-andy/fa75afdb8de4e593faf4094d4e4970f7/archive/0a74aaefebe38ab8b46255b7b2dc364f572c2ae3.zip"},{"id":"9aff9fc2345abfecee509c442a863986","title":"HW Cut Mesh","zipDownload":"https://gist.github.com/bentzen-andy/9aff9fc2345abfecee509c442a863986/archive/cfd174248367dc8c8057937bc993b26e38a0f14b.zip"}]')},function(e,t,o){e.exports={error404:"Error404_error404__-47PB"}},function(e,t,o){e.exports={videoSummary:"TutorialSummary_videoSummary__Ks9zn"}},,,,,function(e,t,o){},function(e,t,o){},,,,,,,,,,,function(e,t,o){"use strict";o.r(t);o(1);var s=o(22),a=o.n(s),n=(o(35),o(36),o(37),o(16)),c=o.n(n),i=o(4),r=o(0);function d(){return Object(r.jsxs)("div",{className:c.a.topnav,children:[Object(r.jsx)(i.b,{to:"/hw-cad-tools/",className:c.a.topnav__brand,children:"HW CAD Tools"}),Object(r.jsx)(i.b,{to:"/hw-cad-tools/tutorials",children:"tutorials"}),Object(r.jsx)(i.b,{to:"/hw-cad-tools/docs",children:"docs"})]})}var l=o(24),h=o.n(l);function m(){return Object(r.jsxs)("div",{className:h.a.footer,children:[Object(r.jsx)(i.b,{to:"/hw-cad-tools/",children:"home"}),Object(r.jsx)(i.b,{to:"/hw-cad-tools/tutorials",children:"tutorials"}),Object(r.jsx)(i.b,{to:"/hw-cad-tools/docs",children:"docs"})]})}var u=o(2),b=o(25),p=o.n(b);function j(){return Object(r.jsxs)("div",{className:p.a.homeContentBlock,children:[Object(r.jsx)("h1",{children:"Getting Started"}),Object(r.jsxs)("p",{children:["Get started with HW CAD Tools by downloading the scripts and installing the menu files found on the"," ",Object(r.jsx)(i.b,{to:"/hw-cad-tools/downloads",children:"downloads page"}),"."]}),Object(r.jsx)("h1",{children:"Tutorial Videos"}),Object(r.jsxs)("p",{children:["Check out the ",Object(r.jsx)(i.b,{to:"/hw-cad-tools/tutorials",children:"tutorial videos"})," ","for step-by-step instructions for each custom command."]})]})}var f=o(26),g=o.n(f),w=o(12),x=o(10),y=o.n(x);function v(e){var t=e.sideNavTitle,o=e.links;return o.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})),o.sort((function(e,t){return e.category<t.category?-1:e.category>t.category?1:0})),Object(r.jsx)("div",{className:y.a.sideNav,children:Object(r.jsxs)("div",{className:y.a.container,children:[Object(r.jsx)("div",{className:y.a.sideNav__title,children:t}),o.map((function(e,s){return Object(r.jsxs)("section",{children:[0===s&&Object(r.jsx)("div",{className:y.a.sideNav__category,children:e.category}),s>0&&o[s].category!==o[s-1].category&&Object(r.jsx)("div",{className:y.a.sideNav__category,children:e.category}),Object(r.jsx)(i.b,{className:y.a.link,to:"/hw-cad-tools/".concat(t.toLowerCase(),"/").concat((a=e.title,a.toLowerCase().replace(/ /g,"-"))),children:e.title})]},e.id);var a}))]})})}function O(){return Object(r.jsx)("div",{className:g.a.tutorialContentBlock,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(v,{sideNavTitle:"Tutorials",links:w})}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("h1",{children:"Video Tutorials"}),Object(r.jsxs)("p",{children:["Click on any of the custom commands in the side-bar to get started."," "]})]})]})})}var _=o(27),N=o.n(_),C=o(28);function k(){return Object(r.jsx)("div",{className:N.a.downloadsContentBlock,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(v,{sideNavTitle:"Downloads",links:C})}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("h1",{children:"Custom Commands"}),Object(r.jsxs)("p",{children:["AutoLisp is a scripting language used to write macros and custom commands for AutoCAD. You can view and download any of these custom commands by selecting one from the side-bar menu and clicking the Download button."," "]})]})]})})}var S=o(8),M=o.n(S),D=o(19),F=o(49);D.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));var H=D.map((function(e,t){return Object(r.jsxs)("tr",{className:t%2===0?M.a.odd:M.a.even,children:[Object(r.jsx)("td",{children:e.name},Object(F.a)().toString()),Object(r.jsx)("td",{children:e.shortcut},Object(F.a)().toString()),Object(r.jsx)("td",{children:e.inputs.map((function(e){return Object(r.jsx)("div",{children:e},e)}))},Object(F.a)().toString()),Object(r.jsx)("td",{children:e.output},Object(F.a)().toString()),Object(r.jsx)("td",{children:e.commandUseCases.map((function(e){return Object(r.jsx)("div",{children:e},e)}))})]},e.id)}));function W(){return Object(r.jsxs)("div",{className:M.a.documentationContentBlock,children:[Object(r.jsx)("h1",{children:"Documentation"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{className:M.a.commandName,children:"Command Name"}),Object(r.jsx)("th",{className:M.a.shortcut,children:"Shortcut"}),Object(r.jsx)("th",{className:M.a.input,children:"Input(s)"}),Object(r.jsx)("th",{className:M.a.output,children:"Output / Result"}),Object(r.jsx)("th",{className:M.a.commandUseCases,children:"Use Case(s)"})]})}),Object(r.jsx)("tbody",{children:H})]})]})}var B=o(29),P=o.n(B);function z(){return Object(r.jsx)("div",{className:P.a.error404,children:Object(r.jsxs)("h3",{children:["404 Error: Cannot find page for URL: ",window.location.href]})})}var A=o(20),T=o.n(A),I=function(e){return["aboard","about","above","across","after","against","along","amid","among","around","as","at","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","in","inside","into","like","minus","near","next","of","off","on","onto","opposite","out","outside","over","past","per","plus","regarding","round","since","than","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","with","within","without"].includes(e)},L=function(){var e,t=window.location.href.split("/").pop().split("-").join(" ");return t=(t=(e=t,e.split(" ").map((function(e){return e.length<=2||I(e)?e:e.replace(e[0],e[0].toUpperCase())})).join(" ")).replace(/3d/g,"3D")).replace(/hw/g,"HW")};function R(e){var t=e.url,o=e.width,s=e.height,a=e.showTitle;return Object(r.jsx)("div",{className:T.a.embeddedVideo,children:Object(r.jsxs)("div",{className:T.a.container,children:[Object(r.jsx)("iframe",{width:o,height:s,src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0}),Object(r.jsx)("h1",{children:a&&L()})]})})}var E=o(30),U=o.n(E);function V(e){var t=e.video;if(t.summary)return Object(r.jsx)("div",{className:U.a.videoSummary,children:t.summary})}var J=o(21),Y=o.n(J);function Q(e){var t=e.video;return""===t.lspFileNames[0]?null:Object(r.jsxs)("div",{className:Y.a.loadingInstructions,children:[Object(r.jsx)("h3",{children:"Loading Instructions"}),Object(r.jsxs)("p",{children:["If you'd like to use this command, add the following code to your"," ",Object(r.jsx)("code",{children:"_hwloadall.lsp"})," file (excluding the ",Object(r.jsx)("code",{children:"..."}),"):"]}),Object(r.jsxs)("div",{className:Y.a.codeSnippet,children:[Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:";; HW Commands"})}),Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})}),t.lspFileNames.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("code",{children:["(load C:/kenf/lisp/",e,")"]})},e)})),Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})})]}),Object(r.jsxs)("p",{children:["Or see the"," ",Object(r.jsx)(i.b,{to:"/hw-cad-tools/tutorials/setting-up-your-_hwloadall-file",children:"instructions"})," ","for setting up your ",Object(r.jsx)("code",{children:"_hwloadall.lsp"})," file."]})]})}var q=o(13),G=o.n(q);function K(e){var t=e.video;return""===t.shortcut?null:Object(r.jsxs)("div",{className:G.a.commandShortcut,children:[Object(r.jsx)("h3",{children:"Command Shortcut:"}),Object(r.jsxs)("p",{children:["If you'd like to set a shortcut for for command, add the following code to your ",Object(r.jsx)("code",{children:"_hwloadall.lsp"})," file (following the load statement):"]}),Object(r.jsxs)("div",{className:G.a.codeSnippet,children:[Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})}),Object(r.jsxs)("div",{children:[t.lspFileNames.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("code",{children:["(load C:/kenf/lisp/",e,")"]})},e)}))," ",Object(r.jsxs)("code",{children:["(defun c:",t.shortcut,"( / ) c:",t.commandName,")"]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})})]}),Object(r.jsxs)("p",{children:["OR: You can customize your keyboard shortcut but substituting"," ",Object(r.jsx)("code",{children:"xyz"})," in place of the ",Object(r.jsx)("code",{children:t.shortcut}),", where"," ",Object(r.jsx)("code",{children:"xyz"})," is your shortcut name."]}),Object(r.jsxs)("div",{className:G.a.codeSnippet,children:[Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})}),Object(r.jsx)("div",{children:Object(r.jsxs)("code",{children:["(defun c:xyz( / ) c:",t.commandName,")"]})}),Object(r.jsx)("div",{children:Object(r.jsx)("code",{children:"..."})})]})]})}var Z=w.map((function(e){return Object(r.jsx)(u.a,{path:"/hw-cad-tools/tutorials/".concat((t=e.title,t.toLowerCase().replace(/ /g,"-"))),exact:!0,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(v,{sideNavTitle:"Tutorials",links:w})}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)(R,{url:"https://www.youtube.com/embed/".concat(e.id),width:"840",height:"470",showTitle:!0}),Object(r.jsx)(V,{video:e}),Object(r.jsx)(Q,{video:e}),Object(r.jsx)(K,{video:e})]})]})},e.id);var t}));function X(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/hw-cad-tools/",exact:!0,children:Object(r.jsx)(j,{})}),Object(r.jsx)(u.a,{path:"/hw-cad-tools/tutorials",exact:!0,children:Object(r.jsx)(O,{})}),Z,Object(r.jsx)(u.a,{path:"/hw-cad-tools/downloads",exact:!0,children:Object(r.jsx)(k,{})}),Object(r.jsx)(u.a,{path:"/hw-cad-tools/docs",exact:!0,children:Object(r.jsx)(W,{})}),Object(r.jsx)(u.a,{path:"*",children:Object(r.jsx)(z,{})})]})})}var $=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{}),Object(r.jsx)(X,{}),Object(r.jsx)(m,{})]})},ee=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,50)).then((function(t){var o=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;o(e),s(e),a(e),n(e),c(e)}))};a.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)($,{})}),document.getElementById("root")),ee()}],[[47,1,2]]]);
//# sourceMappingURL=main.1e3e557a.chunk.js.map