
export default {
    id: 'movie1',
    title: 'Suits',
    year: 2019,
    numberOfSeasons: 9,

    plot: 'When he impresses a big lawyer with his razor-sharp mind, a college droput scores a coveted associate job, even though he has no legal credentials.',
    cast: 'Gabriel Macht, Patrick J. Adams, Rick Hoggman',
    creator: 'Aaron Korsh',
    
    seasons: {
        items: [{
            id: 'season1',
            name: 'Season 1',
            episodes: {
                items: [{
                    id: 'episode1',
                    title: '1. Pilot Part 1 & 2',
                    poster: 'https://i9.ytimg.com/vi_webp/7a-e-vdLcgo/mqdefault.webp?time=1620316800000&sqp=CICl0IQG&rs=AOn4CLBSlxthxTQjetEOqRW9Wg4tfJNkjA',
                    duration: '1h 21m',
                    plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
                    video: 'url("../videos/teaser.mp4")',
                }, {
                    id: 'episode2',
                    title: '2. Errors and Omissions',
                    poster: 'https://i9.ytimg.com/vi/umMI2-XSg6g/mqdefault.jpg?time=1619716800000&sqp=CMDVq4QG&rs=AOn4CLDqJP5V8nYj3zemb_Zm0iw2pwnoDQ',
                    duration: '43m',
                    plot: 'An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.',
                    video: 'https://www.youtube.com/watch?v=k6d7HPHNBI8&ab_channel=GoddanLifestyle',
                }]
            }
        }, {
            id: 'season2',
            name: 'Season 2',
            episodes: {
                items: [{
                    id: 'episode3',
                    title: '1. New season',
                    poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep3.jpg',
                    duration: '41m',
                    plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
                    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }, {
                    id: 'episode4',
                    title: '2. Are you subscribed?',
                    poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
                    duration: '49m',
                    plot: 'An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.',
                    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }]
            }
        }]
    }
}