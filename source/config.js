var config = {
    style: 'mapbox://styles/connorrothschild/ck5sz6sf42uue1jnubeg4jfem/draft',
    accessToken: 'pk.eyJ1IjoiY29ubm9ycm90aHNjaGlsZCIsImEiOiJjazVpZTN5ZXAwZG1mM2ptbnowa3I4ZW4yIn0.vLvH5zQVcMV3ArgDoqNPYA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    // title: 'Since 2014, over 34,000 migrants have died or went missing.',
    // subtitle: 'Where?',
    // byline: 'Mapping Missing Migrants. By Connor Rothschild',
    // footer: 'Source: <a target = "_blank" href = "https://missingmigrants.iom.int">The Missing Migrants Project</a> | Built with <a target = "_blank" href = "https://www.mapbox.com/">Mapbox</a><br>Design: <a target = "_blank" href = "https://connorrothschild.github.io/">Connor Rothschild</a> | Find the source code <a target = "_blank" href = "https://github.com/connorrothschild/map-missing-migrants">here</a>',
    chapters: [
        {
            id: 'title-id',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">Every year, 19,510 people die of homicide in the United States.</span><br><br><span style="font-size:18px">How does Houston compare?</span><br><br><i>Mapping Houston Homicides</i> | By Connor Rothschild, Denizhan Yigitbas, Shane DiGiovanna, and Roy Phillips.<br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: [-111.432,35.975],
                zoom: 3.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'deaths-2015',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'deaths-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'texas-focus',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "Here's Texas.",
            location: {
                center: [-100.04094, 31.28163],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'deaths-2015-texas',
                    opacity: .67
                }
            ],
            onChapterExit: [
                {
                    layer: 'deaths-2015-texas',
                    opacity: 0
                }
            ]
        },
        {
            id: 'three-key-cities',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "Here, you’ll notice concentrations of homicides in three key areas. Roughly 50% of Texas homicides occur in three places: Dallas-Fort Worth, San Antonio, and Houston.",
            location: {
                center: [-97.541, 29.643],
                zoom: 5.47,
                pitch: 57,
                bearing: -24.7
            },
            onChapterEnter: [
                {
                    layer: 'three-key-cities',
                    opacity: .9
                },
                {
                    layer: 'three-key-cities-dots',
                    opacity: .4
                }
            ],
            onChapterExit: [
                {
                    layer: 'three-key-cities',
                    opacity: 0
                },
                {
                    layer: 'three-key-cities-dots',
                    opacity: 0
                }
            ]
        },
        {
            id: 'houston-1',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "HOSUTJOTNMONS",
            location: {
                center: [-95.457, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston',
                    opacity: 0
                }
            ]
        }
    ]
}