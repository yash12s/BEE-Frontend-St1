import React from "react";
import "./Home.css";


const Home = () => {
  return (
    
    <>
      <div className="column" >
        
      {/* <div className="pic">
        
          <img src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div> */}
        {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ftravel%2F&psig=AOvVaw0cQ8DDjWZ9rdZuSriQlZN1&ust=1669986620287000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDH3Yu_2PsCFQAAAAAdAAAAABAE" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/1054201/pexels-photo-1054201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/3974145/pexels-photo-3974145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <div className="text">
          <h1>About Travel Blog </h1>
          <br />
          A travel blog is simply a blog where the entire focus is on the world of travel. To see where blogging fits into the online marketing world, check out my Introduction to Digital Marketing post.
          Travel Blog is a unique free online travel diary for travellers across the world. It works from internet cafes and computers world wide, to allow you to update an online travel diary.
            
            
            <br />
            <br />
            <br />
           <h1>What is a blog?</h1> 
           <br />

           A blog is a web based journal. Lots of travellers write down a daily journal or at least intend to, so the idea here is that you can write down your journal online.

           A blog, short for weblog, is a frequently updated web page used for personal commentary or business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.
            You are always welcome to contribute your articles and spread
            knowledge all over the world.

          {/* </h1> */}
        </div>
        
      </div>
    </>
  );
};

export default Home;
