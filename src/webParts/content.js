import './content.css';
import LoremIpsum, {loremIpsum} from 'react-lorem-ipsum';
import bannerHotel1 from '../aset/bannerHotel1.jpg';
import bannerHotel2 from '../aset/bannerHotel2.jpg';
import bannerHotel3 from '../aset/bannerHotel3.jpg';
import Logo from '../aset/pasFoto.jpeg';

function Header(props) {
    return (
        <div id="hotel-header">
            <div id="hotel-title">
                <h2>{props.name}</h2>
                <a href="#">{props.location}</a>
            </div>
            <div id="hotel-rating">
                <p id="hotel-mark">{props.rating}</p>
                <p id="hotel-votes">{props.votes} votes</p>
            </div>
        </div>
    )
}

function Cover()  {
    return (
        <div id="hotel-content-cover">
            <img src={bannerHotel1} alt="Hotel 1"/>
            <img src={bannerHotel2} alt="Hotel 1"/>
            <img src={bannerHotel3} alt="Hotel 1"/>
        </div>
    )
}

function HotelInfoList(props) {
    return (
        <li className="features-item">
            {props.children}
        </li>
    )
}

function HotelRecommendation(props) {
    return (
        <div id="recommend">
            <div id="recom-para">
                <p>{props.user.name} and {props.other.length} other friends recommended this hotel</p>
            </div>
            <div id="recom-img">
                <img src={props.user.img} alt="User 1"/>
                {props.other.map((usr, index) => (
                    <img key={index} src={usr.img} alt="User"/>
                ))}
            </div>
        </div>
    )
}

function HotelDesc() {
    const features = [
        "Free Wifi",
        "Free Parking",
        "Free Breakfast",
        "Close to the beach",
        "Close to the city",
        "Beautiful view",
        "Friendly staff",
        "Affordable",
    ];
    const member = {
        user: {
            name: "Wahyu",
            img: "https://avatars.akamai.steamstatic.com/2303f646b08a0bd674c014d64d60380fe0193845_full.jpg"
        },
        other: [
            {
                name: "Dedi",
                img: "https://avatars.akamai.steamstatic.com/b596a4e71832905e44d97ea9a2e31bb7d2b7312f_full.jpg"
            },
            {
                name: "Windah",
                img: "https://avatars.akamai.steamstatic.com/149883ee07ad3ff76ef36e2ffb6450fc90426240_full.jpg"
            },
            {
                name: "Garbin",
                img: "https://avatars.akamai.steamstatic.com/f48684be3fb58abb8efc7933ce48820dc4f8edad_full.jpg"
            },
        ]
    }
    return (
        <div id="hotel-info-desc">
            <div id="desc-para">
                <LoremIpsum p={2} avgSentencesPerParagraph={4}/>
            </div>

            <ul id="desc-features">
                {features.map((feature, index) => (
                    <HotelInfoList key={index}>{feature}</HotelInfoList>
                ))}
            </ul>
        
            <HotelRecommendation 
                user={member.user}
                other={member.other}
            />
                    
        </div>
    )
}

function ReviewCard(props) {
    return (
        <div className="review-card">
            <div className="review-desc">
                <p className="review-text">
                    {props.review}
                </p>
            </div>
            <div className="review-user">
                <img className="user-img" src={props.img} alt="User Profile"/>
                <div className="user-desc">
                    <p className="user-name">{props.name}</p>
                    <p className="user-date">{props.date}</p>
                </div>
                <p className="user-rating">{props.rating}</p>
            </div>
        </div>
    )
}

function Review() {
    const userExample = [
        {
            name: "Andre Tautempe",
            img: "https://asset.kompas.com/crops/RuUCNRtSv-80cTRlcTplx1iwPMQ=/0x0:0x0/750x500/data/photo/2020/08/05/5f2aa7ff7d043.jpeg",
            date: "28 May 2019",
            rating: "4.5",
            review: loremIpsum({avgSentencesPerParagraph: 3}),
        },
        {
            name: "Windah Barusadar",
            img: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/06/22/foto-cover-potret-sule-cr-inst-20210622072915.jpg",
            date: "12 March 2019",
            rating: "4.2",
            review: loremIpsum({avgSentencesPerParagraph: 2}),
        },
    ];
    return (
        <div id="review">
            <ReviewCard {...userExample[0]}/>
            <ReviewCard {...userExample[1]}/>
            <div id="read-more">
                <p>Read More</p>
            </div>
        </div>
    )
}

function BookSection() {
    return (
        <div id="book">
            <p id="book-text">Book yourself a room now!</p>
            <button id="book-button">Book Now!</button>
        </div>
    )
}

function HotelMain() {
    return (
        <div id="hotel-main">
            <HotelDesc />
            <Review />
        </div>
    )
}

export default function Content() {
    const hotel = {
        name: "Shangri-La Hotel",
        location: "Jakarta, Indonesia",
        rating: "4.5",
        votes: "1.5k"
    }
    return (
        <div id="main-content">
            <Cover />
            <Header 
                {...hotel}
            /> 
            <HotelMain />
            <BookSection />
        </div>
    )
}