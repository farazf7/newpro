import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'

export class News extends Component {
    articles=[
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Russia declares battlefield gains as NATO ramps up support for Ukraine - Reuters",
            "description": "Russia said it had broken through two fortified defence lines in Ukraine's east, while <a href=\"/world/europe/nato-countries-boost-munitions-output-pledge-48-leopard-2-tanks-kyiv-2023-02-15/\">Western allies pledged</a> to ramp up military aid to better arm Ky…",
            "url": "https://www.reuters.com/world/europe/russia-declares-battlefield-gains-nato-ramps-up-military-equipment-ukraine-2023-02-15/",
            "urlToImage": "https://www.reuters.com/resizer/hCKnxzdoA_xLX1hGv5X2xQhB48k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CXLUXNWDZFOW3EV4NYPA7W4FR4.jpg",
            "publishedAt": "2023-02-16T03:22:00Z",
            "content": "KYIV, Feb 16 (Reuters) - Russia said it had broken through two fortified defence lines in Ukraine's east, while Western allies pledged to ramp up military aid to better arm Kyiv as it prepares for a … [+5145 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Laura Paddison",
            "title": "So-called Doomsday Glacier is 'in trouble,' scientists say after finding surprising formations under ice shelf - CNN",
            "description": "Antarctica's \"Doomsday Glacier\" -- nicknamed because its collapse could drive catastrophic sea level rise -- is melting rapidly in unexpected ways, according to new research.",
            "url": "https://www.cnn.com/2023/02/15/world/thwaites-doomsday-glacier-sea-level-climate-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215101144-thwaites-glacier-antarctica-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-02-16T02:46:00Z",
            "content": "Antarcticas Doomsday Glacier nicknamed because its collapse could drive catastrophic sea level rise is melting rapidly in unexpected ways, according to new research.\r\nThe Thwaites Glacier is roughly … [+5431 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "“Cosmological Coupling” – New Evidence Points to Black Holes as Source of Dark Energy - SciTechDaily",
            "description": "Searching through existing data spanning 9 billion years, a team of researchers led by scientists at the University of Hawaiʻi at Manoa has uncovered the first evidence of \"cosmological coupling\" – a newly predicted phenomenon in Einstein's theory of gravity,…",
            "url": "https://scitechdaily.com/cosmological-coupling-new-evidence-points-to-black-holes-as-source-of-dark-energy/",
            "urlToImage": "https://scitechdaily.com/images/Supermassive-Black-Hole-Artists-Impression-scaled.jpg",
            "publishedAt": "2023-02-16T02:37:50Z",
            "content": "ByUniversity of Hawaii at ManoaFebruary 15, 2023\r\nArtists impression of a supermassive black hole. Cosmological coupling allows black holes to grow in mass without consuming gas or stars. Credit: UH … [+12816 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Virginia Harrison",
            "title": "'I want my independence': what the papers say about Nicola Sturgeon's resignation - The Guardian",
            "description": "Newspapers react to the sudden departure of Scotland’s first minister and speculate on what’s next for the SNP and the UK",
            "url": "https://www.theguardian.com/media/2023/feb/16/what-the-uk-papers-newspaper-front-pages-say-nicola-sturgeon-resignation",
            "urlToImage": "https://i.guim.co.uk/img/media/43f37bbff52d226e7304e0c896c15c04404463e9/0_0_2500_1500/master/2500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=55073c080032a591531fcf9bcdc06009",
            "publishedAt": "2023-02-16T02:35:00Z",
            "content": "Nicola Sturgeons surprise resignation as Scotlands first minister fills newspaper front pages, along with what the move may mean for the future of Scottish independence.\r\nScotlands Daily Record splas… [+1397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "Shooting at El Paso mall leaves 1 dead, 3 injured - NPR",
            "description": "The shooting happened in a busy shopping area and across a large parking lot from a Walmart where 23 people were killed in a racist attack in 2019.",
            "url": "https://www.npr.org/2023/02/15/1157380577/el-paso-mall-shooting",
            "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
            "publishedAt": "2023-02-16T02:00:40Z",
            "content": "EL PASO, Texas Police in El Paso, Texas, say one person was killed and three other people were wounded in a shooting Wednesday in a shopping mall.\r\nOne person has been taken into custody, El Paso pol… [+586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Eric Bieniemy’s inability to get a head-coaching job remains confounding - NBC Sports",
            "description": "The Chiefs have been to five straight AFC Championships, making it to the Super Bowl three times and winning twice. In each of those five years, Eric Bieniemy has served as the team’s offensive coordinator.So why can’t he get a chance to be a head coach?Vario…",
            "url": "https://profootballtalk.nbcsports.com/2023/02/15/eric-bieniemys-inability-to-get-a-head-coaching-job-remains-confounding/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/02/GettyImages-1465615194-e1676512189735.jpg",
            "publishedAt": "2023-02-16T01:50:00Z",
            "content": "The Chiefs have been to five straight AFC Championships, making it to the Super Bowl three times and winning twice. In each of those five years, Eric Bieniemy has served as the teams offensive coordi… [+1943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Buffalo shooting: Relative lunges at gunman before sentencing - BBC",
            "description": "Family members affected by the shooting in Buffalo, NY, speak before a life sentence is handed down.",
            "url": "https://www.bbc.com/news/world-us-canada-64655018",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D628/production/_128642845_p0f39dqk.jpg",
            "publishedAt": "2023-02-16T01:44:15Z",
            "content": "Media caption, Watch: Family of victim charges Buffalo shooter in court room\r\nAn avowed white supremacist who shot dead 10 black people at a Buffalo, New York, supermarket last year has been sentence… [+2939 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KMBC Kansas City"
            },
            "author": "KMBC 9 News Staff",
            "title": "Here's an aerial view of Wednesday's Chiefs Kingdom Champions Parade rally - KMBC Kansas City",
            "description": "It's unknown how many people officially attended Wednesday's parade and rally at Union Station honoring the Kansas City Chiefs.",
            "url": "https://www.kmbc.com/article/kansas-city-chiefs-chiefs-kingdom-champions-parade-aerial-view/42929429",
            "urlToImage": "https://kubrick.htvapps.com/vidthumb/b876345c-2786-43a3-8538-4b6393370102/b876345c-2786-43a3-8538-4b6393370102_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2023-02-16T01:44:00Z",
            "content": "KANSAS CITY, Mo. —It's unknown how many people officially attended Wednesday's parade and rally at Union Station honoring the Kansas City Chiefs. \r\nBut we know it was a lot. \r\nNews Chopper 9 provided… [+185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "US could default this summer unless $31.4tn debt ceiling is raised, CBO warns - The Guardian",
            "description": "Historic federal debt default could occur before July, cautions non-partisan agency",
            "url": "https://www.theguardian.com/business/2023/feb/15/us-treasury-default-debt-ceiling",
            "urlToImage": "https://i.guim.co.uk/img/media/65c9dd8e55f6b85627fcc0bd960692b4f59b35a5/0_50_8090_4857/master/8090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ce61a583f6ea711abec973c9bda0973e",
            "publishedAt": "2023-02-16T01:20:00Z",
            "content": "The Congressional Budget Office (CBO) on Wednesday said the US treasury department will exhaust its ability to pay all its bills sometime between July and September, unless the current $31.4tn cap on… [+4018 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jennifer Elias",
            "title": "Google asks employees to rewrite Bard's bad responses, says the A.I. 'learns best by example' - CNBC",
            "description": "As Google races to get its artificial intelligence search tool up to speed, it wants employees to flag incorrect answers and even to rewrite them.",
            "url": "https://www.cnbc.com/2023/02/15/google-asks-employees-to-rewrite-bards-incorrect-responses-to-queries.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/104602233-GettyImages-684226980-Sundar-Pichai-.jpg?v=1676509630&w=1920&h=1080",
            "publishedAt": "2023-02-16T01:07:00Z",
            "content": "Google execs understand that the company's artificial intelligence search tool Bard isn't always accurate in how it responds to queries. At least some of the onus is falling on employees to fix the w… [+2962 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Paula Reid",
            "title": "First on CNN: FBI searched University of Delaware for Biden documents, source says - CNN",
            "description": "The FBI has conducted two searches at the University of Delaware in connection with the investigation into President Joe Biden's handling of classified documents, a source familiar with the investigation told CNN.",
            "url": "https://www.cnn.com/2023/02/15/politics/biden-delaware-search/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220528104251-01-biden-delaware-commencement-0528.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-02-16T00:43:00Z",
            "content": "The FBI has conducted two searches at the University of Delaware in connection with the investigation into President Joe Bidens handling of classified documents, a source familiar with the investigat… [+1819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Inside Rihanna's Super Bowl Rehearsal Choreography! - Entertainment Tonight",
            "description": "Inside Rihanna nailing her performance with a baby bump at Apple Music’s Super Bowl LVII Halftime Show.Exclusives from #EntertainmentTonight https://www.yout...",
            "url": "https://www.youtube.com/watch?v=b_HK-FJXDY8",
            "urlToImage": "https://i.ytimg.com/vi/b_HK-FJXDY8/maxresdefault.jpg",
            "publishedAt": "2023-02-16T00:30:25Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Eric J. Savitz",
            "title": "Cisco Stock Rallies on Earnings and Guidance Beat - Barron's",
            "description": "Cisco's results could give a lift to investor sentiment about the outlook for enterprise tech spending.",
            "url": "https://www.barrons.com/articles/cisco-earnings-stock-price-2123ee4",
            "urlToImage": "https://images.barrons.com/im-725422/social",
            "publishedAt": "2023-02-16T00:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Jon LaPook",
            "title": "New method revolutionizes heart transplants - CBS News",
            "description": "A procedure called \"donation after circulatory death\" could increase the number of donor hearts available.",
            "url": "https://www.cbsnews.com/news/heart-transplants-donation-after-circulatory-death/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/02/16/ee95af79-9f73-4a09-98d8-b1f809aced21/thumbnail/1200x630/258190121a64897a09754dd288ce9931/1.png",
            "publishedAt": "2023-02-16T00:07:42Z",
            "content": "It was moments with his kids that made Jason Banner decide to take a chance on a new method of heart transplantation. \r\nThe single father of two discovered in 2005 he had a genetic heart condition. L… [+1793 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Gina Martinez",
            "title": "No survivors in Black Hawk helicopter crash near Alabama highway, officials say - CBS News",
            "description": "The helicopter was on a routine training mission at the time of the crash, the Tennessee National Guard said.",
            "url": "https://www.cbsnews.com/news/2-tennessee-national-guardsmen-killed-black-hawk-helicopter-crash-alabama-highway-madison-county-national-guard/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/02/15/9451e526-3923-488d-8889-c81b58e0a4ce/thumbnail/1200x630/fad257198b0b27c296e68dddc8a29108/gettyimages-1242285796.jpg",
            "publishedAt": "2023-02-16T00:06:00Z",
            "content": "Two members of the Tennessee National Guard were killed when a Black Hawk helicopter crashed Wednesday afternoon near Huntsville, Alabama, during a routine training mission, the agency said. \r\nThe cr… [+1068 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Deon J. Hampton, Antonio Planas",
            "title": "MSU students recall harrowing ordeal inside student union as gunman fired - NBC News",
            "description": "Dozens of MSU students returned to campus to retrieve their belongings left behind when shots rang out during the nation's latest mass shooting.",
            "url": "https://www.nbcnews.com/news/us-news/msu-students-recall-harrowing-ordeal-student-union-gunman-fired-rcna70896",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230215-msu-shooting-rally-se-452p-eb8a5e.jpg",
            "publishedAt": "2023-02-15T23:26:57Z",
            "content": "EAST LANSING, Mich. Dozens of Michigan State students who escaped a gunman's bullets inside the student union on Monday night returned Wednesday to retrieve belongings left behind in their desperate … [+3509 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Allan Smith, Sahil Kapur",
            "title": "GOP presidential candidates avoid abortion as 2024 kicks off - NBC News",
            "description": "Republicans seeking the party's 2024 presidential nomination have so far ignored an issue that's been central to conservatives for decades: abortion.",
            "url": "https://www.nbcnews.com/politics/2024-election/gop-presidential-candidates-avoid-abortion-nikki-haley-donald-trump-rcna70859",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230215-nikki-haley-donald-trump-mn-1437-620892.jpg",
            "publishedAt": "2023-02-15T23:08:47Z",
            "content": "CHARLESTON, S.C.  Republicans seeking the party's 2024 presidential nomination have so far ignored an issue that has been central to the conservative movement for decades: abortion.\r\nOn Wednesday, Ni… [+5408 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Robert Lea",
            "title": "James Webb Space Telescope opens Pandora's Cluster in stunning image with help from Einstein (video) - Space.com",
            "description": "The powerful space telescope was able to see three clusters of galaxies in the region, also known as Abell 2744, merging to form a \"mega cluster.\"",
            "url": "https://www.space.com/james-webb-space-telescope-pandoras-cluster",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/YA9xtbbzsYs5cMi3DnphQL-1200-80.jpg",
            "publishedAt": "2023-02-15T23:00:52Z",
            "content": "In Greek mythology, Pandora's curiosity leads her to open a container that releases all of the evils and hardships that now exist in the world.\r\nLet's hope the James Webb Space Telescope (JWST) didn'… [+4905 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Peter Valdes-Dapena",
            "title": "Production halt on Ford's electric F-150 Lightning will last at least a week and half - CNN",
            "description": "Ford recently stopped production on the electric F-150 Lightning pickup because of a possible battery problem. A Ford spokesperson now says a return to production \"could take a few weeks.\"",
            "url": "https://www.cnn.com/2023/02/15/business/ford-f-150-lightning-production-stop-battery-update/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230203162213-ford-electric-vehicle-center.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-02-15T22:50:00Z",
            "content": "Ford recently stopped production on the electric F-150 Lightning pickup because of a possible battery problem. A Ford spokesperson now says a return to production could take a few weeks.\r\nThe potenti… [+2004 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China says U.S. balloons flew over Xinjiang, Tibet, warns of countermeasures - Reuters",
            "description": "Diplomatic friction festered between the United States and China on Wednesday as Beijing charged that U.S. high altitude balloons flew over its Xinjiang and Tibet regions and said it would take measures against U.S. entities that undermine Chinese sovereignty.",
            "url": "https://www.reuters.com/business/china-firmly-opposed-us-blacklist-chinese-entities-will-take-countermeasures-2023-02-15/",
            "urlToImage": "https://www.reuters.com/resizer/mbUoR-gEKEZHYC0fmDZu27Xi83k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GL35A5LAVMYJMFB4I3FV63AOA.jpg",
            "publishedAt": "2023-02-15T22:16:00Z",
            "content": "BEIJING, Feb 15 (Reuters) - Diplomatic friction festered between the United States and China on Wednesday as Beijing charged that U.S. high altitude balloons flew over its Xinjiang and Tibet regions … [+2867 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hello");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


  render() {
    return (
      <div className='News-Div'>
       
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='wid' key={element.url} >
            <NewsItem title={element.title.slice(0,35)} description={element.description.slice(0,70)} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
        })}
        </div>
      
      </div>
    )
  }
}

export default News
