const app = new Vue({
    el: '#app',
    data:{
        officiaLogo:"images/logo.png",
        allPages:[
            {no:0, title:"Home", href:"#"},
            {no:1, title:"Apple", href:"#"},
            {no:2, title:"Microsoft", href:"#"},
            {no:0, title:"Android", href:"#"},
            {no:0, title:"Forums", href:"#"},
            {no:0, title:"Contact us", href:"#"},
        ],
        popularTopics:[
            {no:0, title:"", href:"#"},
            {no:1, title:"", href:"#"},
            {no:2, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
        ],
        recentTopics:[
            {no:0, title:"", href:"#"},
            {no:1, title:"", href:"#"},
            {no:2, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
        ],
        latestReply:[
            {no:0, title:"", href:"#"},
            {no:1, title:"", href:"#"},
            {no:2, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
            {no:0, title:"", href:"#"},
        ]
    }
        
}) 