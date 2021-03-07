import { useState, useEffect } from "react";
import fire from "../config/fire-conf";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
// import { getBlog } from "../Server/Server";

export default function Blogs() {

  // const blog = getBlog();

const [blogs, setBlogs] = useState([]);

useEffect(() => {
  fire
    .firestore()
    .collection("Blog")
    .onSnapshot((snap) => {
      const blogs = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogs);
    });
}, []);

console.log("backend data ==>", blogs);

    return (
      <>
        {blogs.map((item) => (
          <div key={item.id} className={utilStyles.newsTable}>
            <div className={utilStyles.newsImg}>
              <Image
                src="/../public/images/blogOne.jpg"
                height="90px"
                width="160px"
              />
            </div>
            <a href="" className={utilStyles.newsTitle}>
              {item.title}
            </a>
            <br />
            <i className={utilStyles.newsDate}>{item.newsDate}</i>
            <br />
            <br />
            <div className={utilStyles.newsPara}>
              <p>{item.content}</p>
            </div>
            <p style={{ textAlign: "right" }}>
              <a href="" className={utilStyles.newsArticle}>
                Read the full article
              </a>
            </p>
            <div className={utilStyles.separator}></div>
          </div>
        ))}
      </>
    );
}