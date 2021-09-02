import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage(){
    return(
       <div className="searchPage">
           <div className="searchPage_filter">
               <TuneOutlinedIcon/>
               <h2>FILTER</h2>
          </div>
           <hr/>

           <ChannelRow
           image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
           channel = "Clever Programmer"
           verified
           subs="660K"
           noOfVideos={382}
           description="You will love this"
           /> 
          
          <hr/>

          <VideoRow
          views= "1.4M views"
          subs ="400K"
          channel = "Clever Programmer"
          description= "Do you want to study youtube clone.Clone is for all. Best clone ever>learn practise and be illuminated for ever"
          timestamp=" 59 seconds ago"
          title ="Lets build a Youtube Clone"
          image= "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          />

<VideoRow
          views= "1.4M views"
          subs ="400K"
          channel = "Clever Programmer"
          description= "Do you want to study youtube clone.Clone is for all. Best clone ever>learn practise and be illuminated for ever"
          timestamp=" 59 seconds ago"
          title ="Lets build a Youtube Clone"
          image= "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          />

<VideoRow
          views= "1.4M views"
          subs ="400K"
          channel = "Clever Programmer"
          description= "Do you want to study youtube clone.Clone is for all. Best clone ever>learn practise and be illuminated for ever"
          timestamp=" 59 seconds ago"
          title ="Lets build a Youtube Clone"
          image= "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          />
       </div>
    )
}

export default SearchPage;