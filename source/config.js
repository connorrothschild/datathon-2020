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
                    layer: 'cluster-one-fill',
                    opacity: 0
                },
                {
                    layer: 'deaths-2015',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'deaths-2015',
                    opacity: 0
                },
                {
                    layer: 'cluster-one-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'texas-focus',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "<span style = 'font-size:20px;font-weight:bold;'>Of these homicides, roughly 6% of them are committed in Texas.</span>",
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
            title: 'Three Key Areas',
            // image: './path/to/image/source.png',
            description: "While Dallas-Fort Worth, San Antonio, and Houston make up 21% of the state's population, roughly 50% of Texas homicides occur in these three places.",
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
            description: "Let's take a look at Houston. <br><br>Each dot <span style = 'color:red;'>&#9679;</span> represents a homicide victim killed between 2007 and 2017.<br><br>There are 2,942 dots—representing nearly 3000 victims since 2007.",
            location: {
                center: [-95.635, 29.758],
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
        },
        // {
        //     id: 'houston-over-time',
        //     title: 'Homicides over time',
        //     image: './images/homicides-over-time.jpg',
        //     description: "Houston homicides have remained relatively stagnant since 2007 (the first year this data is available). We observe a minor dip between 2011 and 2013, which mimic the national trend.",
        //     location: {
        //         center: [-95.635, 29.758],
        //         zoom: 9.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'homicide-houston',
        //             opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'homicide-houston',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'houston-disposition',
            title: 'Cases Closed?',
            // image: './images/homicides-over-time.jpg',
            description: "One variable of interest is the 'disposition' of the case, which corresponds to the <strong>outcome</strong> of the case. Was the perpetrator caught and arrested, did the case end with no arrest, or is it still open? <hr>In this view, <br><span style = 'color:#0FA800;'>&#9679;</span> closed by arrest, <br><span style = 'color:#A80100;'>&#9679;</span> closed without arrest, and <br><span style = 'color:#616bff;'>&#9679;</span> <i>still open (unsolved)</i>.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: 0
                }
            ]
        },
        {
            id: 'houston-disposition-counts',
            title: 'Disposition status',
            image: './images/disposition-status.jpg',
            description: "As these dots show, the number of solved and unsolved homicides are roughly the same.<hr>In this view, <br><span style = 'color:#0FA800;'>&#9679;</span> closed by arrest, <br><span style = 'color:#A80100;'>&#9679;</span> closed without arrest, and <br><span style = 'color:#616bff;'>&#9679;</span> <i>still open (unsolved)</i>.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: 0
                }
            ]
        },
        // {
        //     id: 'houston-disposition-year',
        //     title: 'Disposition over time',
        //     image: './images/disposition-over-time.jpg',
        //     description: "But, the data suggests that there's recently been an uptick in unsolved cases. <hr>In this view, <br><span style = 'color:#0FA800;'>&#9679;</span> represent cases closed by arrest, <br><span style = 'color:#A80100;'>&#9679;</span> represent cases closed without arrest, and <br><span style = 'color:#616bff;'>&#9679;</span> represent cases that <i>are still open (unsolved)</i>.",
        //     location: {
        //         center: [-95.635, 29.758],
        //         zoom: 9.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'homicide-houston-disposition',
        //             opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'homicide-houston-disposition',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'question-disposition',
            // title: "What variables might affect the resolution of one's case? Is justice applied equally across different sexes, ages, and race?",
            // image: './images/disposition-over-time.jpg',
            description: "<span style = 'font-size:22px;font-weight:bold;'>What variables might affect the resolution of one's case?<br><br>Is justice applied equally across different sexes, ages, and race?</span>",
            //Or are there demographic differences which mimic broader societal disparaties?",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-disposition',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sex-overview',
            title: 'Sex Disparities',
            // image: './images/age-by-race.jpg',
            description: "The first variable we observed was sex. <br><br><i>Does the sex of a victim make them more or less likely to get killed, and does it affect their chances at justice?</i>",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sex-overview',
            // title: 'An overview',
            // image: './images/age-by-race.jpg',
            description: "Perhaps unsurprisingly, more men are victims of homicide than women.<br>In this view (where <span style = 'color:#616bff;'>&#9679;</span> represent males and <span style = 'color:red;'>&#9679;</span> represent females), we see that men are the victims of homicide 4.6x as frequently as women.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sex-real-story',
            title: 'Men are more likely to have open cases',
            image: './images/sex-disposition.jpg',
            description: "But the real story comes when we look at how <i>sex</i> impacts <i>disposition status</i>. What we find when looking at the data is that men are much more likely to have <strong>open cases</strong> in the wake of their deaths, while women find justice much more often.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-sex',
                    opacity: 0
                }
            ]
        },
        {
            id: 'age-overview',
            title: 'Differences by Age',
            // image: './images/age-by-race.jpg',
            description: "The next variable we observed was age. <br><i>Does the age of a victim make them more or less likely to get killed, and does it affect their chances at justice?</i><br><br>These bubbles correspond to victim age, with the smallest dot representing our youngest victim (1 year old) and the largest representing the oldest victim (102 years old).",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-age',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-age',
                    opacity: 0
                }
            ]
        },
        {
            id: 'age-categories',
            title: 'Age of victims',
            image: './images/age-histogram.jpg',
            description: "We find that the age of a person matters: there is an immediate and staggering jump in chances of homicide victimhood once a person hits age 15.<br><br><strong>Someone who is 15-20 years old (<span style = 'color:red;'>&#9679;</span>) is 11.4x more likely to be a homicide victim than someone who is 10-14 years old (<span style = 'color:#616bff;'>&#9679;</span>).<strong>",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-age-categorical',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-age-categorical',
                    opacity: 0
                }
            ]
        },
        {
            id: 'age-by-race',
            title: 'Age of victims (by race)',
            image: './images/age-by-race.jpg',
            description: "While racial minorities follow a similar relationship when it comes to age and homicide victimhood, no such relationship exists for white victims. A white victim who is 66 years old has approximately the same chance of being killed as a white victim who is 22 years old.<hr>In this view, <br><span style = 'color:#4405ff;'>&#9679;</span> represent Hispanic victims, <br><span style = 'color:#c40303;'>&#9679;</span> represent white victims, <br><span style = 'color:#525252;'>&#9679;</span> represent black victims, and <br><span style = 'color:#c0b302;'>&#9679;</span> represent Asian victims.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-houston-age-race',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-houston-age-race',
                    opacity: 0
                }
            ]
        },
        {
            id: 'race',
            title: "Finally, let's focus on race.",
            // image: './images/age-by-race.jpg',
            description: "<hr>In this view, <br><span style = 'color:#4405ff;'>&#9679;</span> represent Hispanic victims, <br><span style = 'color:#c40303;'>&#9679;</span> represent white victims, <br><span style = 'color:#525252;'>&#9679;</span> represent black victims, and <br><span style = 'color:#c0b302;'>&#9679;</span> represent Asian victims.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-race',
                    opacity: .65
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-race',
                    opacity: 0
                }
            ]
        },
        {
            id: 'race-explained',
            // title: "Finally, let's focus on race.",
            // image: './images/age-by-race.jpg',
            description: "We immediately notice two things: <br>First, there are many more black (<span style = 'color:#525252;'>&#9679;</span>) and Hispanic (<span style = 'color:#4405ff;'>&#9679;</span>) victims than there are white (<span style = 'color:#c40303;'>&#9679;</span>) ones. <br> And second, there tends to be clusters of similar-race victims in certain areas of Houston. <hr>In this view, <br><span style = 'color:#4405ff;'>&#9679;</span> represent Hispanic victims, <br><span style = 'color:#c40303;'>&#9679;</span> represent white victims, <br><span style = 'color:#525252;'>&#9679;</span> represent black victims, and <br><span style = 'color:#c0b302;'>&#9679;</span> represent Asian victims.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-race',
                    opacity: .65
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-race',
                    opacity: 0
                }
            ]
        },
        {
            id: 'cluster-one',
            title: "South Main",
            // image: './images/age-by-race.jpg',
            description: "One such cluster is in the South Main neighborhood. You'll notice that there is a large concentration of African-American victims, while there are considerably fewer victims of other races.<hr>In this view, <br><span style = 'color:#4405ff;'>&#9679;</span> represent Hispanic victims, <br><span style = 'color:#c40303;'>&#9679;</span> represent white victims, <br><span style = 'color:#525252;'>&#9679;</span> represent black victims, and <br><span style = 'color:#c0b302;'>&#9679;</span> represent Asian victims.",
            location: {
                center: [-95.383,29.681],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'homicide-race',
                    opacity: .5
                },
                {
                    layer: 'homicide-black-cluster',
                    opacity: .8
                },
                {
                    layer: 'cluster-one-fill',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-race',
                    opacity: 0
                },
                {
                    layer: 'homicide-black-cluster',
                    opacity: 0
                },
                {
                    layer: 'cluster-one-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'more-homicides',
            // title: "Finally, let's focus on race.",
            // image: './images/age-by-race.jpg',
            description: "This is the story of Houston homicides more generally. What we notice is a concentration of homicides in lower-income, majority-minority areas.",
            location: {
                center: [-95.635, 29.758],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: .9
                }
                // {
                //     layer: 'homicide-houston',
                //     opacity: .5
                // }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                }
                // {
                //     layer: 'homicide-houston',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'less-homicides',
            // title: "Finally, let's focus on race.",
            // image: './images/age-by-race.jpg',
            description: "While some areas have almost no homicides.",
            location: {
                center: [-95.409, 29.715],
                zoom: 14.16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: .9
                }
                // {
                //     layer: 'homicide-houston',
                //     opacity: .5
                // }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                }
                // {
                //     layer: 'homicide-houston',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'final',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "What is the story of Houston homicides? One of injustice, unequal burdens, and unsolved cases.",
            location: {
                center: [-95.635, 29.758],
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