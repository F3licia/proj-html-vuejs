const app = new Vue({
    el: '#app',
    data:{
        logo:["images/logo.png"],
        hotTopic:[],
        allPages:[
            {no:0, title:"Home", href:"#"},
            {no:1, title:"Apple", href:"#"},
            {no:2, title:"Microsoft", href:"#"},
            {no:0, title:"Android", href:"#"},
            {no:0, title:"Forums", href:"#"},
            {no:0, title:"Contact us", href:"#"},
        ],
        articles:[
            {
                title:"Questo è il titolo di un articolo n1",
                commts:"4",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_22-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n.2 ma in evidenza",
                commts:"15",
                href:"#",
                featured: true,
                img:"./images/featured_article_1_bg.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n3",
                commts:"4",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_21-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n4",
                commts:"4",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n.5 ma in evidenza",
                commts:"11",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n6",
                commts:"11",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo n7",
                commts:"10",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
         
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
    },
    methods: {              //ritorna tre articoli con più di 10 commenti 
        filteredHotTopic() {  
            this.hotTopic= this.articles.filter((artc) => {           
                return (artc.commts >= 10) * 3
            });
            return hotTopic;
        },
    },
    mounted()  {
         this.filteredHotTopic()
    }, 
        
}) 