const app = new Vue({
    el: '#app',
    data:{
        logo:["images/logo-2x.png"],
        rowHotTopic:[],
       
        allPages:[
            {no:0, title:"Home", href:"#"},
            {no:1, title:"Apple", href:"#"},
            {no:2, title:"Microsoft", href:"#"},
            {no:0, title:"Android", href:"#"},
            {no:0, title:"Forums", href:"#"},
            {no:0, title:"Contact us", href:"#"},
        ],

        inEvidence:{
            title:"Questo è il titolo di un articolo in evidenza",
            commts:"15",
            href:"#",
            img:"./images/featured_article_1_bg.jpg",
            artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
        },
        review:{
            title:"Questo è il titolo di un articolo in evidenza",
            commts:"15",
            href:"#",
            img:"./images/featured_article_2_bg.jpg",
            artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
        },
        articles:[
            {
                title:"Questo è il titolo di un articolo",
                commts:"20",
                href:"#",
                img:"./images/post_feat_img_22-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo ",
                commts:"15",
                href:"#",
                img:"./images/post_feat_img_22-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"21",
                href:"#",
                img:"./images/post_feat_img_21-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"15",
                href:"#",
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"19",
                href:"#",
                featured: false,
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"18",
                href:"#",
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"10",
                href:"#",
                img:"./images/post_feat_img_20-700x441.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
         
        ],
        tutorials:[
            {
                title:"Questo è il titolo di un articolo",
                commts:"20",
                href:"#",
                img:"./images/post_feat_img_22-147x118.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo ",
                commts:"15",
                href:"#",
                img:"./images/post_feat_img_22-147x118.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },
            {
                title:"Questo è il titolo di un articolo",
                commts:"21",
                href:"#",
                img:"./images/post_feat_img_22-147x118.jpg",
                artc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eum culpa itaque saepe unde asperiores atque nobis temporibus facere minus voluptate, labore odio fugiat, veniam, sint placeat alias tempora quae.",
            },       
        ],
        recentTopics:[
            {no:0, title:"Morbi vitae dui euismod vulputate sollicitudin", href:"#"},
            {no:1, title:"Vivamus pellenteque, felis quis varius", href:"#"},
            {no:2, title:"Donec ornare pretium eget scelisque justo", href:"#"},
        ],
        latestReply:[
            {no:0, reply:"Dario Pineda on Morbi vitae dui euismod vulputate sollicitudin", href:"#"},
            {no:1, reply:"Dario Pineda on Morbi vitae dui euismod vulputate sollicitudin", href:"#"},
        ]
    },
    methods: {              //ritorna articoli con più di 10 commenti 
        hotTopic() {  
            this.rowHotTopic= this.articles.filter((artc) => {           
                return (artc.commts >= 10) 
            });
            return rowHotTopic;
        },

        getFeautered() {  

        },

    },
    mounted()  {
         this.hotTopic();

    }, 
    
        
}) 

