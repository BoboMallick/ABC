import React from 'react';
import './Blog.css'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Blog1 from "../../assets/img/projects/blog1.jpg"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


const Blog = () => {
    return (
        <div id="projects">
          <h1 className="pt-3 text-center font-details-b pb-3">BLOG</h1>
          <Timeline>
            <Events>
    
    
    <ImageEvent
                date="05/10/2020"
                className="text-center"
                text="Blog"
                src={L_Blog1}
                alt="Blog"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          Blog Details
                        </Accordion.Toggle>
    
                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            Blog
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                      href="https://medium.com/"
                      target="_blank"
                    >
                     MEDIUM LINE
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>
            </Events>
          </Timeline>
        </div>
      );
};

export default Blog;