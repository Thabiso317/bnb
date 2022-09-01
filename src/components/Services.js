import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "We have graet teste of cocktails"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "The instructor will guide you with the our hiking"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Free transportation to take where ever you want to go around the resort"
      },
      {
        icon: <FaBeer />,
        title: "Open Bar",
        info:
          "We have different types of alcohols"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-R{item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
