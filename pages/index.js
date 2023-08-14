import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>InfiniteImagine</title>
          <meta property="og:title" content="InfiniteImagine" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <div className="home-container01">
            <div className="home-card">
              <h1 className="home-text">
                <span className="HeadingOne">Infinite Imagine</span>
                <br></br>
              </h1>
              <h1 className="home-text03 HeadingOne">Choose the best</h1>
              <span className="home-text04 Lead">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </span>
              <div className="home-container02">
                <div className="home-container03">
                  <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
                </div>
                <OutlineGrayButton button="read more"></OutlineGrayButton>
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                  className="home-image01"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                  className="home-image02"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                  className="home-image03"
                />
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/curved6-1500h.jpg" className="home-image04" />
        <section className="home-features">
          <FeatureCard
            text="Choose the best design system for your next product."
            title="Components"
            image_src="/cube1.svg"
          ></FeatureCard>
          <FeatureCard image_src="/person1.svg"></FeatureCard>
          <FeatureCard
            text="Make your code easier to maintain using variables."
            title="Less Code"
            image_src="/rocket1.svg"
          ></FeatureCard>
          <FeatureCard
            text="This design system is fully supported on any device."
            title="Fully Responsive"
            image_src="/credit%20card1.svg"
          ></FeatureCard>
        </section>
        <section className="home-container05">
          <div className="home-container06">
            <h1 className="home-text07 HeadingOne">
              <span className="home-text08">From nothing to something</span>
            </h1>
            <span className="home-text09">
              <span className="home-text10">
                The highest status people in human history are those that asked
                for nothing and gave everything
              </span>
            </span>
          </div>
          <div className="home-container07">
            <div className="home-container08">
              <img
                alt="image"
                src="/image-desk-1400h.jpg"
                className="home-image05"
              />
              <span className="home-text11 Small">
                <span className="home-text12">
                  &quot;Over the span of the satellite record, Arctic sea ice
                  has been declining significantly, while sea ice in the
                  Antarctichas increased very slightly&quot;
                </span>
                <br></br>
                <span className="home-text14">-NOAA</span>
              </span>
              <div className="home-container09">
                <img
                  alt="image"
                  src="/image-keyb-1400h.jpg"
                  className="home-image06"
                />
              </div>
            </div>
            <div className="home-container10">
              <span className="home-text15">
                <span className="Small">|||</span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="home-container11">
              <span className="home-text19 Small">
                <span className="home-text20">
                  &quot;Over the span of the satellite record, Arctic sea ice
                  has been declining significantly, while sea ice in the
                  Antarctichas increased very slightly&quot; new4
                </span>
                <br></br>
                <span className="home-text22">-NOAA</span>
              </span>
              <img
                alt="image"
                src="/image-sunrise-500w.jpg"
                className="home-image07"
              />
              <div className="home-container12">
                <h3 className="home-text23 HeadingTwo">
                  <span className="home-text24">
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </span>
                </h3>
                <p className="home-text25">
                  <br></br>
                  <span className="home-text27">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <h2 className="home-text31 HeadingOne">Work with us</h2>
                <p className="home-text32 Lead">
                  <span className="home-text33">
                    Whatever your qualification is - we got you!
                  </span>
                </p>
                <p className="home-text34 Body">
                  <span className="home-text35">
                    &quot;Take up one idea. Make that one idea your life - think
                    of it, dream of it, live on that idea. Let the brain,
                    muscles, nerves, every part of your body, be full of that
                    idea, and just leave every other idea alone. This is the way
                    to success. A single rose can be my garden... a single
                    friend, my world.&quot;
                  </span>
                </p>
                <p className="home-text36">Mark Jojansen</p>
                <p className="home-text37 Small">Project manager, Atlassian</p>
                <div className="home-container16">
                  <img
                    alt="image"
                    src="/team-4-200h.jpg"
                    className="home-image08"
                  />
                  <div className="home-container17"></div>
                  <img
                    alt="image"
                    src="/team-3-200h.jpg"
                    className="home-image09"
                  />
                  <div className="home-container18"></div>
                  <img
                    alt="image"
                    src="/team-2-200h.jpg"
                    className="home-image10"
                  />
                </div>
              </div>
            </div>
            <div className="home-logos">
              <div className="home-container19">
                <div className="home-container20">
                  <div className="home-container21">
                    <img
                      alt="image"
                      src="/logo-asana.svg"
                      className="home-image11"
                    />
                  </div>
                  <div className="home-container22">
                    <img
                      alt="image"
                      src="/logo-slack.svg"
                      className="home-image12"
                    />
                  </div>
                  <div className="home-container23">
                    <img
                      alt="image"
                      src="/logo-google-drive.svg"
                      className="home-image13"
                    />
                  </div>
                </div>
                <div className="home-container24">
                  <div className="home-container25">
                    <img
                      alt="image"
                      src="/logo-shopify.svg"
                      className="home-image14"
                    />
                  </div>
                  <div className="home-container26">
                    <img
                      alt="image"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                      className="home-image15"
                    />
                  </div>
                  <div className="home-container27">
                    <img
                      alt="image"
                      src="/logo-invision.svg"
                      className="home-image16"
                    />
                  </div>
                </div>
                <div className="home-container28">
                  <div className="home-container29">
                    <img
                      alt="image"
                      src="/logo-attlasian.svg"
                      className="home-image17"
                    />
                  </div>
                  <div className="home-container30">
                    <img
                      alt="image"
                      src="/logo-weave.svg"
                      className="home-image18"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img alt="image" src="/waves-white.svg" className="home-image19" />
          <img alt="image" src="/top.svg" className="home-top-wave-image" />
        </section>
        <section className="home-contaier">
          <div className="home-container31">
            <div className="home-container32">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text38 HeadingTwo">
              <span className="home-text39">Beware The Components</span>
            </h2>
            <h3 className="home-text40 HeadingTwo">
              <span className="home-text41">How To Handle Them</span>
              <br></br>
            </h3>
            <span className="home-text42">
              <span className="home-text43">
                We’re constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
          </div>
          <div className="home-container33">
            <div className="home-container34">
              <div className="home-container35"></div>
              <div className="home-container36">
                <svg
                  viewBox="0 0 987.4285714285713 1024"
                  className="home-icon2"
                >
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text44 HeadingOne">Search and Discover!</h1>
                <span className="home-text45">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container37">
              <ListItem></ListItem>
              <ListItem
                title="2. Performance Analyze"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container38">
            <div className="home-container39">
              <ListItem
                title="1. Always in Sync"
                description="No matter where you are, Trello stays in sync across all of your devices."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
              ></ListItem>
            </div>
            <div className="home-container40">
              <div className="home-container41"></div>
              <div className="home-container42">
                <svg viewBox="0 0 1152 1024" className="home-icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text48 HeadingOne">Talk and Meet!</h1>
                <span className="home-text49">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text {
            text-align: center;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text03 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-text04 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container02 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 25%;
            object-fit: cover;
          }
          .home-image01 {
            width: 25%;
            object-fit: cover;
          }
          .home-image02 {
            width: 25%;
            object-fit: cover;
          }
          .home-image03 {
            width: 25%;
            object-fit: cover;
          }
          .home-image04 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .home-features {
            width: 100%;
            display: none;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-container06 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text08 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text09 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text10 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container07 {
            width: 100%;
            height: 1333px;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image05 {
            width: 473px;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            flex: 0 0 auto;
            width: 249px;
            height: 207px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text14 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .home-container09 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image06 {
            width: 90%;
            display: block;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-container10 {
            width: 10%;
            height: 100%;
            display: none;
            position: relative;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text15 {
            width: 69px;
            height: 567px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-container11 {
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text19 {
            flex: 0 0 auto;
            width: 373px;
            height: 207px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text20 {
            color: #cb0c9f;
            background-color: rgb(255, 255, 255);
          }
          .home-text22 {
            color: #cb0c9f;
            background-color: rgb(255, 255, 255);
          }
          .home-image07 {
            width: 473px;
            height: auto;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container12 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text23 {
            align-self: center;
          }
          .home-text24 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text25 {
            align-self: center;
          }
          .home-text27 {
            color: #67748e;
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container14 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container15 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-gray-white);
          }
          .home-text32 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text33 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-text34 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text35 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .home-text36 {
            color: var(--dl-color-gray-white);
          }
          .home-text37 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .home-container16 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image08 {
            width: 40px;
            opacity: 1;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image08:hover {
            transform: scale(1.2);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image09 {
            width: 40px;
            opacity: 1;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image09:hover {
            transform: scale(1.2);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image10 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image10:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container19 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container21 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image11 {
            width: 100%;
          }
          .home-container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image12 {
            width: 100%;
          }
          .home-container23 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image13 {
            width: 100%;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container25 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image14 {
            width: 100%;
            object-fit: cover;
          }
          .home-container26 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image15 {
            width: 100%;
          }
          .home-container27 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image16 {
            width: 100%;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container29 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image17 {
            width: 100%;
          }
          .home-container30 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image18 {
            width: 100%;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image19 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container31 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .home-text38 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text39 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text40 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text41 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text43 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container33 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container34 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container34:hover {
            transform: scale(1.04);
          }
          .home-container35 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container36 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text44 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text45 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container37 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container38 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container39 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container40 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .home-container40:hover {
            transform: scale(1.04);
          }
          .home-container41 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container42 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text48 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text49 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container01 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-features {
              max-width: 960px;
            }
            .home-container05 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container06 {
              max-width: 80%;
            }
            .home-text09 {
              text-align: center;
            }
            .home-text11 {
              width: 50%;
            }
            .home-text15 {
              width: 50%;
            }
            .home-text19 {
              width: 50%;
            }
            .home-container13 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container14 {
              align-items: center;
            }
            .home-container15 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container37 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-container39 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text04 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image {
              width: 40%;
            }
            .home-image01 {
              width: 40%;
            }
            .home-image02 {
              width: 40%;
            }
            .home-image03 {
              width: 40%;
            }
            .home-image04 {
              display: none;
            }
            .home-features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container05 {
              max-width: 720px;
            }
            .home-container07 {
              align-items: center;
              flex-direction: column;
            }
            .home-container08 {
              width: 80%;
            }
            .home-image05 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text11 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image06 {
              display: none;
            }
            .home-container10 {
              width: 80%;
            }
            .home-text15 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container11 {
              width: 80%;
            }
            .home-text19 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image07 {
              display: none;
            }
            .home-container13 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container31 {
              width: 80%;
            }
            .home-text42 {
              text-align: center;
            }
            .home-container33 {
              flex-direction: column;
            }
            .home-container37 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container38 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container39 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container02 {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              width: 100%;
            }
            .home-container13 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text42 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
