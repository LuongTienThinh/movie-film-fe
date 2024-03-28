import { useContext } from "react";
import { Tab } from "@headlessui/react";

import Icons from "assets/icons";
import { ThemeContext } from "contexts/themeContext";
import { images } from "images";
import { IFilm } from "interfaces";
import './index.scss';

interface IRanking {
  listFilm?: Array<IFilm>;
}

const tabs = ['Top ngày', 'Top tuần', 'Top tháng'];


const Ranking = ({ listFilm }: IRanking) => {
  const themeMode = useContext(ThemeContext);
  const films: Array<Array<IFilm | undefined> | undefined> = tabs.map((e, i) => i % 2 === 0 ? listFilm && [ ...listFilm] : listFilm && [...listFilm]?.reverse());

  return (
    <>
      <div className={`ranking ranking-${themeMode.theme} w-full max-w-md px-2 sm:px-0`}>
        <Tab.Group>
          <Tab.List className="flex rounded-t-xl overflow-hidden text-lg font-semibold">
            {tabs && tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) => selected
                  ? 'tab selected w-full py-2.5 font-medium shadow outline-none border-t-4 pt-1.5'
                  : 'tab w-full py-2.5 font-medium outline-none'
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {films && films.map((film, idx) => (
              <Tab.Panel
                key={idx}
                className='tab-panel rounded-b-xl'
              >
                <ul>
                  {film && film.map((e, i) => (
                    <>
                      {e &&
                        <li key={e.label} className="rank-item relative flex justify-center items-center p-2">
                          <div
                            className="w-1/5 text-center text-4xl leading-none font-extrabold"
                            style={{ color: i + 1 === 1 ? '#F12828' : i + 1 === 2 ? '#26BE0D' : i + 1 === 3 ? '#0A85DD' : 'inherit' }}
                          >
                            {i + 1}
                          </div>
                          <div className="w-4/5 flex items-center justify-between h-12">
                            <img className="w-12 h-full object-cover object-center rounded-[5px]" src={images[`./${e.slug}.jpg`]} alt="" />
                            <div className="flex flex-col justify-between w-[75%] h-full">
                              <span className="text-[13px] font-extrabold">{e.label}</span>
                              <div className="common-flex-box">
                                <span className="text-[10px] font-semibold">2024</span>
                                <div className="text-[8px] italic flex items-center min-w-[25%]">
                                  <Icons className="w-2.5 h-2.5 me-1" themeMode={themeMode.theme} iconName={"view"} />
                                  <span>15.314k</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      }
                    </>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default Ranking;