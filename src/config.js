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
                zoom: 20,
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
            image: './path/to/image/source.png',
            description: `After the wisemen left an angel appeared to Joseph in a dream, warning them to flee for Egypt. Funny enough when Jesus returns from Egypt with his family because Herod is now dead He fulfilled the Messianic prophecy in Hosea 11:1 that Jesus will come out of Egypt. So Herod''s selfish and scared attempt to kill Jesus, a new king, was used by God. Throughout Jesus' life it parrells what that nation of Isreal has gone through after God leads them out of Egypt under the leadership of Moses.`,
            location: {
                center: [31.2343, 30.0070],
                zoom: 30,
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
            image: './path/to/image/source.png',
            description: `Just like all Jewish families Jesus and his parents went to Jerusalem to take part of the Passover Feast. The passover is an event that happened when the Jews were slaves in Egypt and the final miracle performed by God. On the way back, Joseph and Mary left Jesus in Jerusalem without knowing. In shock, they turned back and spent three days looking for Jesus. On the third day they found Jesus teaching in the temple and they were in distraught. People listening to Jesus were astonished about what this 12 year old understood and his answers. Jesus' parents questioned why he was at the temple. Jesus respond sincerly and amazed, "Why were you looking for me? Did you now know that I must be in my Father's house?" But he was obedient to His parents and went with them back to Nazareth`,
            location: {
                center: [35.2167, 31.7833],
                zoom: 30,
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
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Jesus growing up at home',
            image: './path/to/image/source.png',
            description: `During the rest of Jesus childhood he grew up. The Bible says, "Jesus grew in wisdom and in stature and in favor with God and all the people" (Luke 2:52).`,
            location: {
                center: [35.3033, 32.7019],
                zoom: 30,
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
            alignment: 'right',
            hidden: false,
            title: 'Baptism',
            image: './path/to/image/source.png',
            description: `Jesus' humility came through by his choosing to be baptized. Baptism, which involved being washed with water, was a way that people showed that they were set apart to serve God, and Jesus wanted to show that as well. After doing so, the Bible says a dove came out of heaven and the voice of God spoke, saying "This is my beloved Son, in whom I am well pleased." It was the beginning of a new era for Jesus (Luke 3:21-22). `,
            location: {
                center: [35.6192, 33.1867],
                zoom: 30,
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
            alignment: 'left',
            hidden: false,
            title: 'Temptation',
            image: './path/to/image/source.png',
            description: `After being baptized in the Jordan River, Jesus travelled into the wilderness where he fasted from food for 40 days. He also experienced great temptations to not trust God but instead seize power for himself. These are temptations every person faces. We are afraid to trust that God has our best interests at heart, even after we experience clear expressions of his love! Jesus experienced those temptations too, but he ultimated continued to trust God for all he needed (Luke 4:1-13).  `,
            location: {
                center: [35.3456, 31.7587],
                zoom: 30,
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
            alignment: 'right',
            hidden: false,
            title: 'First Miracle: Water to Wine',
            image: './path/to/image/source.png',
            description: `One day, Jesus attended a wedding. While he was there, the host ran out of wine! It seemed to everyone like the party was over. But then Jesus' mother, Mary, rounded up the servants and told them to listen to Jesus. Jesus tried to get off the hook, but his mom wasn't having it! Finally he agreed. The servants brought big jars, filled with gallons and gallons of water. Then Jesus told them to draw out the water, into glasses and take it to the host. When he tasted it, it was wine! The party was back on! (John 2:1-12)`,
            location: {
                center: [35.2992, 33.2092],
                zoom: 30,
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
            alignment: 'left',
            hidden: false,
            title: 'Cleansing of the temple',
            image: './path/to/image/source.png',
            description: `You may have heard that the Bible says, "When you are angry, don't sin." But that doesn't mean, "Never get angry"! In fact, Jesus famously got angry at some people outside the holy Temple. People were setting up business outside the Temple and turning religion into a for-profit enterprise! Jesus wasn't having it. He made a whip and started driving the people out of the Temple. He every started flipping over their tables! Anger can be the right response under the right circumstances. Jesus wasn't angry because he had been personally insulted, but because people were disrespecting God. Things were turned upside down, from how they should be. Perhaps, by flipping over tables, Jesus was turning things right-side up! (John 2:13-22)`,
            location: {
                center: [35.2354, 31.7780],
                zoom: 30,
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
            alignment: 'right',
            hidden: false,
            title: 'Visit from Nicodemus',
            image: './path/to/image/source.png',
            description: `In Jesus' day, religious leaders were among the most educated men (and they were almost all men!) of their day. Jesus was a controversial figure in their circles, so they often sparred with him in public, to try and get the best of him. But an expert named Nicodemus came late one night to have a real conversation with Jesus, out of the public eye. He wasn't doing it to be an "influencer," but out of true curiosity. He asked honest questions. At one point, Jesus seemed surprised, "You're an expert!" he exclaimed, "and yet you don't understand these things?" It seems Nicodemus's expertise has missed some of the most important things! (John 2:23-3:21)`,
            location: {
                center: [35.2354, 31.7780],
                zoom: 30,
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

            id: '37',
            alignment: 'left',
            hidden: false,
            title: 'Jesus appears to Paul',
            image: './path/to/image/source.png',
            description: `Just like all Jewish families Jesus and his parents went to Jerusalem to take part of the Passover Feast. The passover is an event that happened when the Jews were slaves in Egypt and the final miracle performed by God. On the way back, Joseph and Mary left Jesus in Jerusalem without knowing. In shock, they turned back and spent three days looking for Jesus. On the third day they found Jesus teaching in the temple and they were in distraught. People listening to Jesus were astonished about what this 12 year old understood and his answers. Jesus' parents questioned why he was at the temple. Jesus respond sincerly and amazed, "Why were you looking for me? Did you now know that I must be in my Father's house?" But he was obedient to His parents and went with them back to Nazareth`,
            location: {
                center: [35.2167, 31.7833],
                zoom: 30,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
