import axios from "axios";
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://media.istockphoto.com/id/1361421117/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB%E3%81%AF%E5%B1%B1%E3%81%AE%E5%B0%BE%E6%A0%B9%E3%82%92%E7%99%BB%E3%82%8B.jpg?s=612x612&w=0&k=20&c=Ee9aa3_uXk2wxKGZnUB15--JYF-BuXaEXzMSDezV1dc=" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, earum eaque! Molestiae veniam ipsum dolor sit amet consectetur, adipisicing elit. Et, earum eaque! Molestiae veniam </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}         
          
        </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            
          </div>
        </div>
    </div>
  )
}
