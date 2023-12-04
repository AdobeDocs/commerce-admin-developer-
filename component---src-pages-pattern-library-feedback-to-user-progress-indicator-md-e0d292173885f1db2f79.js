"use strict";(self.webpackChunkcommerce_admin_developer=self.webpackChunkcommerce_admin_developer||[]).push([[7210],{85750:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return l}});var s=t(87462),r=t(45987),i=(t(35776),t(3905)),n=t(91515),p=t(42668);const o=["components"],m={},d={_frontmatter:m},c=n.Z;function l(e){let{components:a}=e,t=(0,r.Z)(e,o);return(0,i.mdx)(c,(0,s.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"progress-indicator"},"Progress indicator"),(0,i.mdx)("p",null,"Users sometimes need to wait for a process to be completed by the system. In such case, it is best to communicate that to the user that the system is working the process that the user requested. There are two types of progress indicator: 1.) a progress bar and 2.) a spinner."),(0,i.mdx)("p",null,"The use of progress indicator should follow this guideline."),(0,i.mdx)("h2",{id:"when-to-use"},"When to Use"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Use when needing to provide feedback to the user that a process is running, especially when user initiate the process."),(0,i.mdx)("li",{parentName:"ul"},"When a percentage of completion can be shown and the process , use a progress bar."),(0,i.mdx)("li",{parentName:"ul"},"When a percentage of completion cannot be shown or the process is relatively short, use a spinner.")),(0,i.mdx)("h2",{id:"when-not-to-use"},"When Not to Use"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When process' progress communicates well enough on its own."),(0,i.mdx)("li",{parentName:"ul"},"When process completes so quickly that it is distracting to show progress. If the task takes less than 500ms."),(0,i.mdx)("li",{parentName:"ul"},"When the process waits for the user to complete the task."),(0,i.mdx)("li",{parentName:"ul"},"When the user doesn't need to know something is happening"),(0,i.mdx)("li",{parentName:"ul"},"When the process operates in the background and doesn't block user activity, progress indicator can be used but is not necessary."),(0,i.mdx)("li",{parentName:"ul"},"When you can use content from the operation to visualize progress.")),(0,i.mdx)("h2",{id:"behavior"},"Behavior"),(0,i.mdx)("p",null,"Progress indicator is read-only, not interactive."),(0,i.mdx)("h3",{id:"spinner"},"Spinner"),(0,i.mdx)("p",null,"Spinner is a gif image."),(0,i.mdx)(p.Z,{src:"/Spinner-lg.gif",alt:"Progress indicator example",mdxType:"CustomImage"}),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Process is triggered"),(0,i.mdx)("li",{parentName:"ol"},"Show spinner - To avoid flickering, if a process generally takes 2 seconds to complete, but can be completed under 500ms. Delay 500ms before showing the spinner."),(0,i.mdx)("li",{parentName:"ol"},"Once process is completed, the spinner disappear along with other indicative elements depending on the context.")),(0,i.mdx)("h3",{id:"progress-bar"},"Progress Bar"),(0,i.mdx)("p",null,"In general, it is not recommended to use the progress bar if the process can be completed under 3 seconds. To avoid flickering, the minimum time displayed of progress bar should be 3 seconds."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"States Diagram:")),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"788px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/5530d/progressbar-behavior-diagram.webp 320w","/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/0c8fb/progressbar-behavior-diagram.webp 640w","/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/8b443/progressbar-behavior-diagram.webp 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/dd4a7/progressbar-behavior-diagram.png 320w","/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/0f09e/progressbar-behavior-diagram.png 640w","/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/c3dd4/progressbar-behavior-diagram.png 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/ce56d013d1d7acdede0e3027154e8d0e/c3dd4/progressbar-behavior-diagram.png",alt:"progressbar behavior diagram",title:"progressbar behavior diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Process Trigger")),(0,i.mdx)("p",{parentName:"li"},"This process trigger is what the user tell system to start process. It can be anything depending on the context such as a button or a drop action.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Starting State")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1022px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/5530d/progressbar-starting-state.webp 320w","/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/0c8fb/progressbar-starting-state.webp 640w","/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/febeb/progressbar-starting-state.webp 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/dd4a7/progressbar-starting-state.png 320w","/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/0f09e/progressbar-starting-state.png 640w","/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/e5fd4/progressbar-starting-state.png 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/24263a44b44f51ba41fd784c4b9b2194/e5fd4/progressbar-starting-state.png",alt:"progressbar starting state",title:"progressbar starting state",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Progressing")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1022px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/5530d/progressbar-progressing.webp 320w","/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/0c8fb/progressbar-progressing.webp 640w","/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/febeb/progressbar-progressing.webp 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/dd4a7/progressbar-progressing.png 320w","/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/0f09e/progressbar-progressing.png 640w","/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/e5fd4/progressbar-progressing.png 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/7c7a6c5e9584ed9baf00c4e239e60468/e5fd4/progressbar-progressing.png",alt:"progressbar progressing",title:"progressbar progressing",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Success")),(0,i.mdx)("p",{parentName:"li"},"Once success, the page should refresh to show success status. The success status and behavior will depend on context of the scenario. (ie. open new page, stay on the same page, success message, etc.)")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Failed")),(0,i.mdx)("p",{parentName:"li"},"The progress bar will disappeared and is replaced with this error message."),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1022px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/5530d/progressbar-failed.webp 320w","/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/0c8fb/progressbar-failed.webp 640w","/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/febeb/progressbar-failed.webp 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/dd4a7/progressbar-failed.png 320w","/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/0f09e/progressbar-failed.png 640w","/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/e5fd4/progressbar-failed.png 1022w"],sizes:"(max-width: 1022px) 100vw, 1022px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/03bfe3d913c1484411a2f7d794331a2c/e5fd4/progressbar-failed.png",alt:"progressbar failed",title:"progressbar failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,i.mdx)("h2",{id:"variations"},"Variations"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"217.49999999999997%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/5530d/variations.webp 320w","/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/0c8fb/variations.webp 640w","/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/d71bc/variations.webp 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/dd4a7/variations.png 320w","/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/0f09e/variations.png 640w","/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/42a19/variations.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/6b18fa544959b705f8b2c56a92f9f6d1/42a19/variations.png",alt:"variations",title:"variations",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"style"},"Style"),(0,i.mdx)("h3",{id:"spinner-1"},"Spinner"),(0,i.mdx)("p",null,"The spinner can be any of these 4 sizes."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"223px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"180.71748878923765%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/4fa1da4b4fb060e5507ee3204eaedbac/ba42d/style-spinner.webp 223w"],sizes:"(max-width: 223px) 100vw, 223px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/4fa1da4b4fb060e5507ee3204eaedbac/2e5f2/style-spinner.png 223w"],sizes:"(max-width: 223px) 100vw, 223px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/4fa1da4b4fb060e5507ee3204eaedbac/2e5f2/style-spinner.png",alt:"style spinner",title:"style spinner",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"progress-bar-1"},"Progress Bar"),(0,i.mdx)("p",null,"Refer to Messaging Pattern for final styling on error message."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/5530d/style-progressbar.webp 320w","/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/0c8fb/style-progressbar.webp 640w","/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/d71bc/style-progressbar.webp 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/dd4a7/style-progressbar.png 320w","/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/0f09e/style-progressbar.png 640w","/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/42a19/style-progressbar.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/518ba6f549216b4a358fba4fee649533/42a19/style-progressbar.png",alt:"style progressbar",title:"style progressbar",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"assets"},"Assets"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/download/magento-progressbar.zip"},"Download Progress Indicator PSD and GIF source"),"."),(0,i.mdx)("p",null,"For any other resources, please contact the Commerce UX Design Team."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-pattern-library-feedback-to-user-progress-indicator-md-e0d292173885f1db2f79.js.map