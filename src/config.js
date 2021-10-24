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
            image: './path/to/image/source.png',
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
        }
    ]
};
