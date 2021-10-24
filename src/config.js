var config = {
    style: 'mapbox://styles/scruz6938/ckv417krm0ih114pk04vfamus',
    accessToken: 'pk.eyJ1Ijoic2NydXo2OTM4IiwiYSI6ImNrdjRoN2t2ajNlbXQycXA2a25jMXplb2gifQ.DcXBfMfqbSmYkKX2k7N6-Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Living Atlas',
    subtitle: 'Question: Who is Jesus?',
    byline: '-',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: '1',
            alignment: 'left-youtube',
            hidden: false,
            title: 'Birth',
            //image: './images/nativity.jpeg',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_OLezoUvOEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Jesus was born around 4 BC after Mary was told that she was to give birth by the Angel Gabriel. (Luke 1:26-28, Matthew 1:18-25) Mary was engaged to Joseph who is from the family of Judah and David. Mary then became pregnant by the Holy Spirit though this not the same as mythological gods impregnanting humans. This was required as it seems that the sinful nature was passed down through the father. This allowed Jesus to be fully human but not born into sin.* </p> <p><b>Dig deeper:</b><a href="https://www.gotquestions.org/virgin-birth.html">Why is the Virgin Birth so important?</a></p>',
            location: {
                center: [35.1956, 31.7031],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'Wiseman Visit',
            image: './images/magi.jpg',
            description: 'Magi are wise men who travelled to Bethlem from the East. They likely arrived when Jesus was 2 years old. They were also likely from Persia, which is modern day Iran. They likely knew about this star to come because of the prophet Daniel in Daniel 9:24-27. There was also the prophecy of Balaam in Numbers 24:17 that mentions a star coming out of Jacob, also known as Isreal. Also, nothing stats that there were three wisemen but just three gifts.',
            location: {
                center: [35.1956, 31.7031],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: 'Angel Tells Family to Flee',
            // image: './path/to/image/source.png',
            description: `After the wisemen left an angel appeared to Joseph in a dream, warning them to flee for Egypt. Funny enough when Jesus returns from Egypt with his family because Herod is now dead He fulfilled the Messianic prophecy in Hosea 11:1 that Jesus will come out of Egypt. So Herod''s selfish and scared attempt to kill Jesus, a new king, was used by God. Throughout Jesus' life it parrells what that nation of Isreal has gone through after God leads them out of Egypt under the leadership of Moses.`,
            location: {
                center: [31.2343, 30.0070],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'Jesus Age 12 in the Temple',
            // image: './path/to/image/source.png',
            description: `Just like all Jewish families Jesus and his parents went to Jerusalem to take part of the Passover Feast. The passover is an event that happened when the Jews were slaves in Egypt and the final miracle performed by God. On the way back, Joseph and Mary left Jesus in Jerusalem without knowing. In shock, they turned back and spent three days looking for Jesus. On the third day they found Jesus teaching in the temple and they were in distraught. People listening to Jesus were astonished about what this 12 year old understood and his answers. Jesus' parents questioned why he was at the temple. Jesus respond sincerly and amazed, "Why were you looking for me? Did you now know that I must be in my Father's house?" But he was obedient to His parents and went with them back to Nazareth`,
            location: {
                center: [35.2167, 31.7833],
                zoom: 30,
                pitch: 100,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Jesus growing up at home',
            // image: './path/to/image/source.png',
            description: `During the rest of Jesus childhood he grew up. The Bible says, "Jesus grew in wisdom and in stature and in favor with God and all the people" (Luke 2:52).`,
            location: {
                center: [35.3033, 32.7019],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right-youtube',
            hidden: false,
            title: 'Baptism',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0k4GbvZUPuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus' humility came through by his choosing to be baptized. Baptism, which involved being washed with water, was a way that people showed that they were set apart to serve God, and Jesus wanted to show that as well. After doing so, the Bible says a dove came out of heaven and the voice of God spoke, saying "This is my beloved Son, in whom I am well pleased." It was the beginning of a new era for Jesus (Luke 3:21-22). `,
            location: {
                center: [35.6192, 33.1867],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left-youtube',
            hidden: false,
            title: 'Temptation',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oHy83v8pGeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> After being baptized in the Jordan River, Jesus travelled into the wilderness where he fasted from food for 40 days. He also experienced great temptations to not trust God but instead seize power for himself. These are temptations every person faces. We are afraid to trust that God has our best interests at heart, even after we experience clear expressions of his love! Jesus experienced those temptations too, but he ultimated continued to trust God for all he needed (Luke 4:1-13).  `,
            location: {
                center: [35.3456, 31.7587],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'right-youtube',
            hidden: false,
            title: 'First Miracle: Water to Wine',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xaWI4-n0z_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> One day, Jesus attended a wedding. While he was there, the host ran out of wine! It seemed to everyone like the party was over. But then Jesus' mother, Mary, rounded up the servants and told them to listen to Jesus. Jesus tried to get off the hook, but his mom wasn't having it! Finally he agreed. The servants brought big jars, filled with gallons and gallons of water. Then Jesus told them to draw out the water, into glasses and take it to the host. When he tasted it, it was wine! The party was back on! (John 2:1-12)`,
            location: {
                center: [35.2992, 33.2092],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left-youtube',
            hidden: false,
            title: 'Cleansing of the temple',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/z8z_Noilw1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> You may have heard that the Bible says, "When you are angry, don't sin." But that doesn't mean, "Never get angry"! In fact, Jesus famously got angry at some people outside the holy Temple. People were setting up business outside the Temple and turning religion into a for-profit enterprise! Jesus wasn't having it. He made a whip and started driving the people out of the Temple. He every started flipping over their tables! Anger can be the right response under the right circumstances. Jesus wasn't angry because he had been personally insulted, but because people were disrespecting God. Things were turned upside down, from how they should be. Perhaps, by flipping over tables, Jesus was turning things right-side up! (John 2:13-22)`,
            location: {
                center: [35.2354, 31.7780],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'right-youtube',
            hidden: false,
            title: 'Visit from Nicodemus',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/EjIlhu-yuTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> In Jesus' day, religious leaders were among the most educated men (and they were almost all men!) of their day. Jesus was a controversial figure in their circles, so they often sparred with him in public, to try and get the best of him. But an expert named Nicodemus came late one night to have a real conversation with Jesus, out of the public eye. He wasn't doing it to be an "influencer," but out of true curiosity. He asked honest questions. At one point, Jesus seemed surprised, "You're an expert!" he exclaimed, "and yet you don't understand these things?" It seems Nicodemus's expertise has missed some of the most important things! (John 2:23-3:21)`,
            location: {
                center: [35.2167, 31.7833],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {

            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Chooses the Four Disciples',
            //image: './path/to/image/source.png',
            description: `<p>One day, Jesus was preaching on the shore and many people were interested in what He shared clearly about God's Word. Eventually, He was pushed to the edge of the shore and asked Simon Peter, who was cleaning his net, if He could use His boat to sit in it just a little off shore. Peter agreed. After Jesus was done sharing Jesus asked Peter to out deeper and drop your nets to catch some fist. Peter was tired and said they were fishing all night and they didn't catch anything! Peter agreed to try it anyways. Oh boy, was Peter surpised when he did that! The net had some many fish it started to tear and the boat started to sink with all that weight! Peter called over for help from the other fishermen, Andrew and the sons of Zebedee, James and John. After Peter had time to think he realized what happened and knew that Jesus was the Lord and told Jesus to leave him because he knew how sinful he was. Jesus didn't let Peter to tremble in fear by reassuring him to not be afraid. Jesus then called the 4 men to follow Him since they will now be fishermen of people.</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/order-calling-Jesus-disciples.html> Order of Jesus calling His disciples</a></p>`,
            location: {
                center: [35.2167, 31.7833],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {

            id: '12',
            alignment: 'right-youtube',
            hidden: false,
            title: 'Sermon on the Mount',
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-3nN9-C1yKU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Shortly after Jesus' ministry started this first sermon Jesus shares with His disciples and those following Him. This sermon covered many topics from how to treat one another to how to dedicate your life to God. Living free from hypocrisy but full of love, grace, wisdom and discernment. Recorded on Matthew 5:1-7:28</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/sermon-on-the-mount.html> More on the Sermon of the Mount</a></p>`,
            location: {
                center: [35.575, 32.8811],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {

            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'Jesus Calls Levi AKA Matthew',
            //image: './path/to/image/source.png',
            description: `<p>Throughout Jesus' mininistry people would follow him and hear him speak. However, Jesus explictly called for Matthew to follow Him. Even though Matthew was despised among Jews for betraying them by working for the Romans, collecting taxes. People questioned Jesus for hanging out with people like Matthew but Jesus said He came for the sinners, not for people who think they are right with God. As Jesus said it's impossible to save a person who doesn't believe they need to be saved. (Matthew 5:3; Matthew 9:9-13; Matthew 11:28)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/Matthew-in-the-Bible.html> More about Matthew</a></p>`,
            location: {
                center: [35.575, 32.8811],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'right-youtube',
            hidden: false,
            title: "Jesus' Sermon from the Boat",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hj0cVBYKaEg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>After a tiring day Jesus said to His disciples let's cross to the other said so in that and other boats to went out to sea. This sea is prone to storms because of the Mediterranean winds and the semi-tropical conditions on this sea below sea level with tall hills and mountains around it. So a storm came upon the disciples while Jesus was sound asleep. However, the boats started to fill up. The disciples were filled with fear questioning Jesus if he even cares about them as they believe they were able to die! Jesus woke up and commanded for the wind and sea, \"Peace! Be still!\" Everything was suddently calm, both wind and waves. Jesus then asked where was their faith. However, the disciples were confused but afraid of Jesus' powers since even the wind and the sea obey Him. (Mark 4:35-41)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/Sea-of-Galilee.html> More about the Sea of Galilee</a></p>`,
            location: {
                center: [35.575, 32.8811],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'left-youtube',
            hidden: false,
            title: "Jesus heals Jairus' Daughter",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MGJ0TKRTEFI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Healings were one of the many things Jesus did on earth. So once the disciples and Jesus cross the sea of Galilee He was met with another crowd. Then one of the rulers of the synagogue in Capernuam arrived to the crowd he went down to Jesus' feet, humbling himself before Jesus. Jairus pleads that Jesus heals his dying daughter. In faith he asks Jesus to place his hand on her so that she will live. Jesus agreed to this. On His way to the daughte Jairus wasn't the only one with great faith. A women who tried everything to stop her constant bleeding saw Jesus and knew if she could just touch His robe she would be healed. She touch Jesus' robe, Jesus felt healing power went out of Him and looked until he saw this trembling but faithful woman who was now healed. During that time messengers told Jairus that his daughter is dead. Jesus went anyways bringing the first four disciples with Him. Jesus then held the girl's hand and told her to get up and she did! Jesus then told them to not tell anyone of what happened and to give the girl something to eat. (Mark 5:21-43)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/talitha-cumi.html> About Talitha Cumi</a></p>`,
            location: {
                center: [35.575, 32.8811],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'right-youtube',
            hidden: false,
            title: "Feeding of the 5000 (Fish and Loaves)",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/yOL9JZXd1M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Jesus was once again teaching on the North East side of the Sea of Galilee by Bethsaida. He was followed everywhere because the miracles He did. It was getting close to Passover again (Mark 6:35-44; John 6:6-14)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/feeding-the-5000.html> More on the Feeding of the 500</a></p>`,
            location: {
                center: [35.6306, 32.91],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            alignment: 'left-youtube',
            hidden: false,
            title: "Jesus Walks on Water",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SIW6HVl4qSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/walking-on-water.html> What was the meaning of Jesus walking on water?</a></p>`,
            location: {
                center: [35.5072, 32.8606],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            alignment: 'right-youtube',
            hidden: false,
            title: "Feeding of the 4000",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/bMSUByyJpcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>This is the second time Jesus feeds a crowd that came to listen to him. This time we are told that there were about 4,000 people there and like the first time, Jesus uses the 7 loaves of  bread and some fish that disciples had to feed all these people. Here again people there was seven large baskets of leftover bread after the crowd was fed. (Mark 8:1-9)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/feeding-the-hungry.html> What does the Bible say about feeding the hungry?</a></p>`,
            location: {
                center: [35.6306, 32.91],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'left-youtube',
            hidden: false,
            title: "Jesus fortells his death for the first time",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Hy20IoNoit4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Jesus starts to reshape the disciple's expectation of Jesus' mission as a Messiah. He tells them for the first time that he is about to suffer and die by the hands of the religious leaders of Isreal. He also foretells that He will raise again after 3 days.</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/I-go-to-prepare-a-place-for-you.html> What did Jesus mean when He said, “I go to prepare a place for you”?</a></p>`,
            location: {
                center: [35.6933, 33.2461],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20',
            alignment: 'right-youtube',
            hidden: false,
            title: "The Transfiguration",
            //image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Pl-6pTDa1yU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Jesus is fully man and fully God. Peter, James and John got to see a glimspe of this when Jesus took them up on a mountain and transfigured before them. His face began to shine and his clothes became brilliantly white. Paul, who later became a follower of Jesus and wrote many books of the New Testament,  writes in one of his letters "Though he[Jesus] was by nature God, he did not consider equality with God as a prize to be displayed, but he emptied himself by taking the nature of a servant. When he was born in human likeness, and his appearance was like that of any other man". (Philippians 2:5-7)</p><p><b>Dig Deeper:</b><a href=https://www.gotquestions.org/transfiguration.html> What was the meaning and importance of the transfiguration?</a></p>`,
            location: {
                center: [35.8575, 33.4161],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21',
            alignment: 'left',
            hidden: false,
            title: 'Jesus Foretells His Death for the second time',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/M_vVCibGHl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> In God's upside kingdom to be "first", you need to be last, that means you need to be humble like a servant. Jesus reminds his disciples that he is going to exemplify this by predicting, again, that he will be killed and will rise again after three days. (Mark 9: 30-37)`,
            location: {
                center: [35.5750, 32.8811],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '22',
            alignment: 'right',
            hidden: false,
            title: 'Jesus teaches his disciples how to pray',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qNTBQ-hHrYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Prayer is how we talk to God. It does not have to be long and we don't need to use any fancy words or mantras. Jesus helps his disciples break away from their notions of prayer and gives a simple prayers that we can use when we want to talk to God.  (Mathew 6:5-14)`,
            location: {
                center: [35.2644, 31.7700],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '23',
            alignment: 'left',
            hidden: false,
            title: 'Lazarus raised from the dead',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qZbP38Jxzn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus knew that his friend, Lazarus was sick but He only arrived in town four days after Lazarus died. Jesus wept along with Lazarus' family even though he knew that this was not the end of Lazarus's story. (John 11:38-44 )`,
            location: {
                center: [35.2644, 31.7700],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '24',
            alignment: 'right',
            hidden: false,
            title: 'The Last Supper',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vBOR4XMDFZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> The Passover festival was an important jewish festival that celebrated the exodus of Isreal from salvery in Egypt. Jesus uses the passover to instiute a new convenat relationship with God, where Jesus' scarifce on our behalf allows us to be freed from the salvery of sin and death.  (Luke 22:17-20)`,
            location: {
                center: [35.2293,31.7720],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '25',
            alignment: 'left',
            hidden: false,
            title: 'Jesus prayer in the garden of Gethsemane',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/goR5FO1vge8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus knew that the time of his crucifixion was near. So he took his disciples to the garden of Gethsemane to pray. We see Jesus wrestling with consquence of bearing the sin of the world. Ultimately, He asks God for his will to be done. It is good to know that Jesus can relate to our own struggles when we find it hard to do God's will in our lives. (Matthew 26:36-46)`,
            location: {
                center: [35.2402, 31.7794],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '26',
            alignment: 'right',
            hidden: false,
            title: 'Judas Iscariot Betrays Jesus',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sz7UICFortc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Judas Iscariot, one of Jesus' disciples, decides to work with the regilious leaders from some money to hand over Jesus. Judas meets Jesus in the garden with some temple guards and uses a kiss as a sign to identify Jesus for the guards. Jesus knew all along that Judas was going to betary him and went with the gaurds,  even though Jesus' disciplies tried to restort to violence to try to stop them. (Matthew 26: 47-56)`,
            location: {
                center: [35.2402, 31.7794],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '27',
            alignment: 'left',
            hidden: false,
            title: 'Jesus on Trial with the high priest',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zMaHYMs6NB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus is brought before the jewish leaders and they try their best to accuse Jesus of saying something wrong. Jesus openly admits that he is the Messiah by quoteing a prophecy in the book Daniel 7:13. This was enough for the leaders to sentence him to death but they needed Roman authority to do so. (Matthew 26: 57-67)`,
            location: {
                center: [35.2288, 31.7725],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '28',
            alignment: 'right',
            hidden: false,
            title: 'Pontius Pilate Hands Over Jesus',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/rs-nHYYmors" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Pontius Pilate was the governor of Judea from 26 -36 AD. Jesus was brought to Pilate to be tried and put to death. Even though Pilate did not find Jesus guilty of the accusations brought against him, Pilate caved into the religious leader's demand to crucify Jesus. (Mark 15: 1-15)`,
            location: {
                center: [35.2281, 31.7746],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '29',
            alignment: 'left',
            hidden: false,
            title: 'Jesus crucified',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_unHmAf7INk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> If you've ever seen a cross, this is where it originated! Crosses were used in Roman times as a way to execute criminals, even before Jesus. But Jesus' death on this cross became a turning point in history, and the cross became a symbol of the ultimate sacrifice, dying for others, so that they might live. (Mark 15: 21-39)`,
            location: {
                center: [35.2294, 31.7786],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '30',
            alignment: 'right',
            hidden: false,
            title: 'Jesus buried at the tomb of Joseph',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5CVx4Tif7Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Joseph of Arimathea asked Pilate if he could take down Jesus' body before the sabbath to bury him. Aftter getting permission Jesus was laid in a tomb that was cut out a rock and (John 19:31-42)`,
            location: {
                center: [35.2297, 31.7783],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '31',
            alignment: 'left',
            hidden: false,
            title: 'Jesus appears to Mary',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Vb24Lk1Oh5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Early Sunday morning, a woman named Mary Magdalene went to Jesus' tomb to care for his body. But when she got there, the tomb was empty and Jesus' body was gone! She was dumbfounded, and unsure what to do. She wandered through the garden cemetery wandering what to do next, feeling confused. Then a man who she thought was the gardener came up to her. But he knew her name. "Mary," he said. And instantly, she knew it was Jesus. Somehow! Not that she was any less confused, but somehow, the impossible was true. Jesus has come back from the dead! Jesus then told Mary to go tell his disciples. So she left the garden, and began spreading the news. (Mark 16:2-14)`,
            location: {
                center: [35.2297, 31.7783],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '32',
            alignment: 'right',
            hidden: false,
            title: 'Jesus appears on the road to Emmaus',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8YlzWPPiH4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> The news of Jesus' resurrection was slowly beginning to spread. After all, how could you keep something like that quiet? On Sunday night, two of Jesus' followers were walking home from Jerusalem to a neighboring village, west of the city. They encountered a stranger on their route, and fell into conversation with him. He seemed not to know about the news, but he did seem to know about the prophecies of the Jewish scriptures. They invited him to their home for dinner that evening. When they sat down, he prayed over the food, and suddenly they realized who he was. They could hardly believe it. And then, just as suddenly, he disappeared! With hardly a moment to spare, they put their sandals back on and ran back to Jerusalem to tell the others! (Luke 24:13-35)`,
            location: {
                center: [34.9894, 31.8394],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '33',
            alignment: 'left',
            hidden: false,
            title: 'Jesus Appears on the Beach to the Disciples',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kP3753Pc8-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus was still revealling Himself to others as the news of His resurection spread. So along the Sea of Galiee where Peter, Thomas, Nathanael and other disciples went back to their old life of fishing, discouraged and not sure what was next. So Jesus went up to them and asked how their fishing was going, and the the disciples said they have caught nothing. Also, they didn't know it was Jesus. So Jesus once again asked them to cast their fishing net to the right side of the boat just as Jesus asked when He first met Peter. The same thing happened, The disciples once again witnessed an overwhelming amount of fish that overloaded the boat. Peter knew it was Jesus and swam to shore. After that they ate breakfast. (John 21:1-15)`,
            location: {
                center: [35.5833,32.8333],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '34',
            alignment: 'right',
            hidden: false,
            title: 'Ascension',
            // image: './path/to/image/source.png',
            description: ` <iframe width="560" height="315" src="https://www.youtube.com/embed/RD0LNtc1UE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> This is the great end to Jesus' physical presence on earth. The disciples stil don't fully understand what is next in their journey with Jesus and ask questions of when the Isreal will be restored it Isreal's former glory and sit on the throne to rule from Jersusalem. Jesus then responds that it's not for them to know but to instead trust God's plan. Jesus introduces the Holy Spirit and explains how they will be a witness of Jesus to all people groups and languages once you have the Holy Spirit. As soon as Jesus said that He was lifted up into a cloud where they could no longer see Jesus. As they gazed into the sky, two men in white robes as why they are looking up in the sky? They continue to state that the way Jesus went to Heaven is the same way He will return the same way. They were referring to the day of Judgement. (Acts 1:6-11)`,
            location: {
                center: [35.2439, 31.7783],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '35',
            alignment: 'left',
            hidden: false,
            title: 'The Disciples Receiving the Holy Spirit',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JQhkWmFJKnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Even though Jesus was physically gone His presence in the form of the Holy Spirit has not yet come. On the day of Pentecost suddenly a rushing wind filled the home where the disciples where sitting and it seemed to have fire rest on each one of them. The Holy Spirit was now in the disciples and they were able to speak different languages. Since many devote Jews came to Jerusalem on the day of Pentacost many grew up speaking their mother tongue/language. They heard the disciples and heard these Galilean men speaking different langauges. Languages they understood! Some mocked them thinking they were drinking wine. However, Peter corrected them since it's only early in the morning. Why would they be drinking already? Peter continue to preach and be a witness to others that day. (Acts 2:1-41)`,
            location: {
                center: [35.2293, 31.7720],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '36',
            alignment: 'right',
            hidden: false,
            title: 'Jesus appears to Paul',
            // image: './path/to/image/source.png',
            description: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oiVAbkINtRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Jesus physical presence may have been gone and His Holy Spirit came upon the disciples but one more appreance or more of a blinding had to be done. Saul was a proud Jew who fought for the right thing and he was turning and killing in Christ followers, also known as who belong to The Way. So Saul with his men were on theres way to Damascus. Suddently a bright light from the sky and Heaven shined around Saul. However, the men with him hear a voice but could not see anyone. Then the voice of Jesus ask him, "why are you persecuting me?" referring to Jesus' disciples, the Body of Christ, the Church. After the voice and bright light was gone Saul was unable to see so his men led him to Damascus. He could not see for three days, he did not eat or drink. Saul regained his sight once he arrived in Damascus and the disciple named Anaias put his hand on Saul saying that Jesus sent him to so you can see again and be filled with the Holy Spirit. Saul was then baptized and ate food. Saul eventually was renamed to Paul. (Acts 9:1)`,
            location: {
                center: [33.1476, 35.7578],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
