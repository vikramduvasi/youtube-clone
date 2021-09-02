import React from "react";
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard";
import logo from  './prat.jpeg'
import "./VideoCard.css"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos_videos">
            <VideoCard
            title="Beome a web developer"
            views="1M Views"
            timestamp="3 days ago"
            ChannelImage="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.jpegmini.com%2Fuser%2Fimages%2Fslider_puffin_jpegmini_mobile.jpg&imgrefurl=https%3A%2F%2Fwww.jpegmini.com%2F&tbnid=G1_Vs888uiu6-M&vet=12ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ..i&docid=2DOK0HM4QCJg-M&w=800&h=800&q=images&ved=2ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ"
            channel="Vikram_bird"
            image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            
            <VideoCard
            title="Beome a web developer"
             views="1M Views"
            timestamp="3 days ago"
            ChannelImage="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            channel="Human_Photo"
            image={logo}/>
            <VideoCard
              title="A cat Lover"
              views="1M Views"
              timestamp="3 days ago"
              ChannelImage="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.jpegmini.com%2Fuser%2Fimages%2Fslider_puffin_jpegmini_mobile.jpg&imgrefurl=https%3A%2F%2Fwww.jpegmini.com%2F&tbnid=G1_Vs888uiu6-M&vet=12ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ..i&docid=2DOK0HM4QCJg-M&w=800&h=800&q=images&ved=2ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ"
              channel="Vikram_bird"
              image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            
            <VideoCard title="A cat Lover"
              views="1M Views"
              timestamp="3 days ago"
              ChannelImage="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.jpegmini.com%2Fuser%2Fimages%2Fslider_puffin_jpegmini_mobile.jpg&imgrefurl=https%3A%2F%2Fwww.jpegmini.com%2F&tbnid=G1_Vs888uiu6-M&vet=12ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ..i&docid=2DOK0HM4QCJg-M&w=800&h=800&q=images&ved=2ahUKEwiK9b35nLXsAhVEHbcAHTV6Cx8QMygAegUIARDOAQ"
              channel="Clever Programmer"
              image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            
            <VideoCard title="AnimalLover"
              views="1M Views"
              timestamp="3 days ago"
              ChannelImage="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              channel="Vikram_bird"
              image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            
        </div>
        </div>
    )
}

export default RecommendedVideos;