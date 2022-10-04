import{_ as l}from"./iobroker_logo.bd67845a.js";import{_ as c,r as s,o as d,c as u,f as n,b as e,d as o,e as t,w as i,a as h}from"./app.85742c1e.js";const m={},p=h('<h1 id="iobroker-docker-image" tabindex="-1"><a class="header-anchor" href="#iobroker-docker-image" aria-hidden="true">#</a> ioBroker Docker Image</h1><p><img src="'+l+'" alt="ioBroker Logo"></p><p><img src="https://img.shields.io/badge/source-github-blue?style=flat" alt="Source"> <img src="https://img.shields.io/github/v/release/buanet/ioBroker.docker?style=flat" alt="Release"> <img src="https://img.shields.io/github/issues/buanet/ioBroker.docker?style=flat" alt="Github Issues"> <img src="https://img.shields.io/docker/pulls/buanet/iobroker?style=flat" alt="Docker Pulls"> <img src="https://img.shields.io/docker/stars/buanet/iobroker?style=flat" alt="Docker Stars"> <img src="https://img.shields.io/docker/image-size/buanet/iobroker/latest?style=flat" alt="Docker Image Size (tag)"> <img src="https://img.shields.io/github/license/buanet/ioBroker.docker?style=flat" alt="License"></p><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>I started this project in 2017 when I was looking for a clean and easy solution to run my ioBroker instance on my Synology DiskStation without virtualizing a whole operating system. Today this image is grown to the official Docker Image of ioBroker smarthome software.</p><h3 id="what-is-iobroker" tabindex="-1"><a class="header-anchor" href="#what-is-iobroker" aria-hidden="true">#</a> What is ioBroker?</h3>',6),k=e("br",null,null,-1),g=e("br",null,null,-1),f={href:"https://www.iobroker.net",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"what-is-docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-docker","aria-hidden":"true"},"#"),o(" What is Docker?")],-1),_=e("br",null,null,-1),w=e("br",null,null,-1),v={href:"https://docs.docker.com",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"docs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docs","aria-hidden":"true"},"#"),o(" Docs")],-1),j={href:"https://hub.docker.com/r/buanet/iobroker",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"support-the-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#support-the-project","aria-hidden":"true"},"#"),o(" Support the project")],-1),B=e("br",null,null,-1),D={href:"https://github.com/buanet/ioBroker.docker/issues",target:"_blank",rel:"noopener noreferrer"},I={href:"http://forum.iobroker.net/viewtopic.php?f=17&t=5089",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),S=e("a",{href:"https://www.paypal.me/buanet",target:"_blank"},[e("img",{src:"https://buanet.de/wp-content/uploads/2017/08/pp128.png",height:"20",width:"20"})],-1),T=e("br",null,null,-1);function N(C,L){const a=s("ExternalLinkIcon"),r=s("RouterLink");return d(),u("div",null,[n(`-
When using comments plugin on this site, the permalink tag length can be max 27 (location.href max 50) 
`),p,e("p",null,[o('IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: "adapters") ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.'),k,o(" All data is stored in a central database that all adapters can access. With this it is very easy to build up logical connections, automation scripts and beautiful visualizations."),g,o(" For further details please check out "),e("a",f,[o("iobroker.net"),t(a)]),o(".")]),b,e("p",null,[o('Docker is an open source containerization platform that makes it easy to build, deploy and share applications in small containers. "Containerization" or "container virtualization" is the next step in virtualization technologies. While typical virtual machines use virtualized hardware to run a complete operating system, containers just include the absolute minimum of dependencies a software needs to run and directly share the kernel of the host system. Compared to virtual machines container virtualization lets you save a lot resources.'),_,o(" Containers also act as little sandboxes which adds an additional security layer and makes it easy to move them from one host to another."),w,o(" For more information please check out the officials "),e("a",v,[o("Docker Docs"),t(a)]),o(" or take a small YouTube session. There are tons of videos explaining what Docker is and how it works.")]),y,e("p",null,[o("The very basic information about how to run the ioBroker Docker image can be found at the "),e("a",j,[o("Docker Hub page"),t(a)]),o(". For further, more detailed instructions you should check out the official docs with the following content:")]),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#getting-started"},{default:i(()=>[o("Getting Started")]),_:1}),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#running-from-command-line"},{default:i(()=>[o("Running from command-line")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#running-with-docker-compose"},{default:i(()=>[o("Running with docker-compose")]),_:1})])])]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#persistent-data"},{default:i(()=>[o("Persistent data")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#environment-variables-env"},{default:i(()=>[o("Environment variables (ENV)")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#networks"},{default:i(()=>[o("Networks")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#advanced-configuration"},{default:i(()=>[o("Advanced configuration")]),_:1}),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#mounting-usb-devices"},{default:i(()=>[o("Mounting USB devices")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#startup-scripts"},{default:i(()=>[o("Startup scripts")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#multihost"},{default:i(()=>[o("Multihost")]),_:1})])])]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#maintenance"},{default:i(()=>[o("Maintenance")]),_:1}),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#backup"},{default:i(()=>[o("Backup")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#restore"},{default:i(()=>[o("Restore")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#updates-upgrades"},{default:i(()=>[o("Updates & Upgrades")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#docker-healthcheck"},{default:i(()=>[o("Docker Healthcheck")]),_:1})])])]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#best-practice"},{default:i(()=>[o("Best practice")]),_:1}),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#avoid-using-latest-tag"},{default:i(()=>[o("Avoid using latest tag")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#use-maintenance-script"},{default:i(()=>[o("Use maintenance script")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#migrating-states-to-redis"},{default:i(()=>[o("Migrating states to redis")]),_:1})])])]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#miscellaneous"},{default:i(()=>[o("Miscellaneous")]),_:1}),e("ul",null,[e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#beta-testing"},{default:i(()=>[o("Beta testing")]),_:1})]),e("li",null,[t(r,{to:"/projects/iobroker-docker-image/docs.html#notes-for-developers"},{default:i(()=>[o("Notes for developers")]),_:1})])])])]),n(`
## Tutorials

While the docs are kept general I made some Tutorials you can follow step-by-step to successfully set up your container. 

Links Coming soon!
`),x,e("p",null,[o("The easiest way to support this project is to leave me some likes/ stars on Github and Docker Hub!"),B,o(" If you want to give something back, feel free to take a look into the "),e("a",D,[o("open issues"),t(a)]),o(" or the "),e("a",I,[o("ioBroker forum thread"),t(a)]),o(" and helping me answering questions, fixing bugs or adding new features!"),z,o(" If you want to buy me a pizza instead, you can do this here: "),S,T,o(" Thank you!")])])}const V=c(m,[["render",N],["__file","index.html.vue"]]);export{V as default};
