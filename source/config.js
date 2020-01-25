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
            description: '<span style="font-size:24px">Every year, 19,510 people die of homicide in the United States.</span><br><br><i>Mapping Houston Homicides</i> | By Connor Rothschild, Denizhan Yigitbas, Shane DiGiovanna, and Roy Phillips.<br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
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
            id: 'three-key-areas',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "Here, you’ll notice concentrations of homicides in three key areas. __%? of Texas homicides occur in three cities: Dallas-Fort Worth, San Antonio, and Houston.",
            location: {
                center: [-100.04094, 31.28163],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'three-key-cities',
                    opacity: .67
                }
            ],
            onChapterExit: [
                {
                    layer: 'three-key-cities',
                    opacity: 0
                }
            ]
        }
    ]
}