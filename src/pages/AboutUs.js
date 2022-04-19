import React from "react";
import { Carousel, Row, Container, Col } from "react-bootstrap";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Container fluid>
      <Row className="d-flex">
        <Col md={12} lg={6}>
          <Container fluid>
            <h2>What is a Dog Walker?</h2>
            <p>
              Do you love spending time with dogs? Would you prefer working
              outside over being cooped up in an office? You may want to
              consider becoming a dog walker! Walking a dog is part of the daily
              exercise regime needed in order to keep a dog healthy and happy.
              However, there are times when dog owners are unable to take their
              dog(s) out for their much needed walks, and that's where the
              services of a dog walker comes in.
            </p>
            <h2>What does a Dog Walker do?</h2>

            <p>
              Dog walkers can either be independent business owners or part of a
              larger dog-walking business. They are typically paid by the half
              hour or by the hour which allows dog owners to get out of the
              house and do errands, work overtime, or take some time away.
              Having a dog walker means knowing that their dog will get the care
              and exercise they need. A dog walker will typically pick the dog
              up at the owner's house, take it out for its walk, and return the
              animal back to the house. Some dog walkers take many dogs for a
              walk at the same time, while others prefer to take only one at a
              time. Some, especially those who own their own business, may
              choose to include grooming services as well. Dog walkers need to
              have complete control, as they may be walking several dogs at a
              time, and need to have full authority so that one does not get
              away from the group. In some cases, a walker may have to deal with
              breaking up dogs in a fight, or with runaways. Physical stamina is
              sometimes necessary.
            </p>
            <h2>What is the workplace of a Dog Walker like?</h2>

            <p>
              A dog walker spends almost all of their time outside, rain or
              shine, taking a dog(s) out for their exercise. These excursions
              not only provide exercise, but also stimulation and socialization
              with people and other dogs that a dog needs and wants. As a
              result, the dog is more content, displays less destructive
              tendencies, and is calmer for their owner.
            </p>
          </Container>
        </Col>
        <Col lg={6} md={12} >
          <Container>
          <Carousel fade className="mt-3">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 aboutUs-img"
                src="https://preview.redd.it/k4rhxide3mu61.jpg?width=640&crop=smart&auto=webp&s=dd66ecb36ba05fc65c805fe0a94bd3e73b4bbc4f"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-shadow">Dog walkers are investigative and artistic</h3>
                <p className="text-shadow">
                  Dog walkers tend to be predominantly investigative
                  individuals, which means that they are quite inquisitive and
                  curious people that often like to spend time alone with their
                  thoughts.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 aboutUs-img"
                src="http://photos1.blogger.com/blogger/322/466/1600/dogwalker.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="text-shadow">
                  The top personality traits of dog walkers are social
                  responsibility and openness
                </h3>
                <p className="text-shadow">
                  Dog walkers score highly on social responsibility, indicating
                  that they desire fair outcomes and have a general concern for
                  others. They also tend to be high on the measure of openness,
                  which means they are usually curious, imaginative, and value
                  variety.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 aboutUs-img"
                src="https://cdn.vox-cdn.com/thumbor/jj-KICGu-2pqdPvrn6R6s5tFVfs=/0x0:3000x2143/1400x1050/filters:focal(834x920:1314x1400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61311045/09.05_DOGS_VOX_111.0.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="text-shadow">Can I learn to become a dog walker?</h3>
                <p className="text-shadow">
                  A career as a dog walker typically depends predominantly on
                  qualities you can gain through experience, with a small aspect
                  of skills you are born with.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
