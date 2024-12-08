"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8862],{9321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const s={},a="Plugins In-Depth",o={permalink:"/TaskWeaver/blog/plugin",editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/plugin.md",source:"@site/blog/plugin.md",title:"Plugins In-Depth",description:"**Pre-requisites**: Please refer to the Introduction and the Plugin Development",date:"2024-11-22T02:18:33.000Z",tags:[],readingTime:4.7,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Run TaskWeaver with Locally Deployed Not-that-Large Language Models",permalink:"/TaskWeaver/blog/local_llm"},nextItem:{title:"Roles in TaskWeaver",permalink:"/TaskWeaver/blog/role"}},l={authorsImageUrls:[]},c=[{value:"Plugin Basics",id:"plugin-basics",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.strong,{children:"Pre-requisites"}),": Please refer to the ",(0,i.jsx)(n.a,{href:"/docs/plugin/plugin_intro",children:"Introduction"})," and the ",(0,i.jsx)(n.a,{href:"/docs/plugin/how_to_develop_a_new_plugin",children:"Plugin Development"}),"\npages for a better understanding of the plugin concept and its development process."]})}),"\n",(0,i.jsx)(n.h2,{id:"plugin-basics",children:"Plugin Basics"}),"\n",(0,i.jsxs)(n.p,{children:["In TaskWeaver, the plugins are the essential components to extend the functionality of the agent.\nSpecifically, a plugin is a piece of code wrapped in a class that can be called as a function by the agent in the generated code snippets.\nThe following is a simple example of a plugin that generates ",(0,i.jsx)(n.code,{children:"n"})," random numbers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from taskweaver.plugin import Plugin, register_plugin\n\n@register_plugin\nclass RandomGenerator(Plugin):\n    def __call__(self, n: int):\n        import random\n        return [random.randint(1, 100) for _ in range(n)]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"RandomGenerator"})," class inherits the ",(0,i.jsx)(n.code,{children:"Plugin"})," class and implements the ",(0,i.jsx)(n.code,{children:"__call__"})," method, which means\nit can be called as a function. What would be the function signature of the plugin?\nIt is defined in the associated YAML file. For example, the YAML file for the ",(0,i.jsx)(n.code,{children:"RandomGenerator"})," plugin is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: random_generator\nenabled: true\nrequired: true\ndescription: >-\n  This plugin generates n random numbers between 1 and 100.\nexamples: |-\n  result = random_generator(n=5)\nparameters:\n  - name: n\n    type: int\n    required: true\n    description: >-\n      The number of random numbers to generate.\n\nreturns:\n  - name: result\n    type: list\n    description: >-\n      The list of random numbers.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The YAML file specifies the name, description, parameters, and return values of the plugin.\nWhen the LLM generates the code snippets, it will use the information in the YAML file to generate the function signature.\nWe did not check the discrepancy between the function signature in the Python implementation and the YAML file.\nSo, it is important to keep them consistent.\nThe ",(0,i.jsx)(n.code,{children:"examples"})," field is used to provide examples of how to use the plugin for the LLM."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);