import './Products.css';
export default function News(props){

    return(
        <div className="news">
           <div className="news-img">
            <img src={props.article.image} alt="iomage"/>

           </div>
           <h1>{props.article.name}</h1>
           {/* /* <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} targey="_blank">Read More</a></p>
           
           <div className="source">
            <p>Author:{props.article.author}</p>
            <p>Publisher:{props.article.source.name}</p> */ }

           </div>
        
    )
}