import { Fragment, useContext, useEffect, useState } from "react";
import { Menu, Transition, Combobox } from "@headlessui/react";
import { Link } from "react-router-dom";

import './index.scss';
import Icons from 'assets/icons';
import { images } from "images";
import { ThemeContext } from "contexts/themeContext";
import { IFilm } from "interfaces";

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

const notifications = [
  { film: 'Solo leveling', slug: 'solo-leveling', seen: false },
  { film: 'Fluffy paradise', slug: 'fluffy-paradise', seen: false },
  { film: 'Metallic rouge', slug: 'metallic-rouge', seen: true },
  { film: 'Magic and muscles', slug: 'magic-and-muscles', seen: false },
  { film: 'Ragna crimson', slug: 'ragna-crimson', seen: false },
  { film: 'The unwanted undead adventure', slug: 'the-unwanted-undead-adventure', seen: false },
  { film: 'Tom and jerry', slug: 'tom-and-jerry', seen: true },
  { film: 'The world ends with you', slug: 'the-world-ends-with-you', seen: true },
]

const genres = [
  'Hành động',
  'Thể thao',
  'Thần thoại',
  'Tình cảm',
  'Võ thuật',
];

const countries = [
  'Việt Nam',
  'Nhật Bản',
  'Hàn Quốc',
  'Trung Quốc',
  'Mỹ',
]

const Header = () => {
  const themeMode = useContext(ThemeContext);
  const [searchFilmText, setSearchFilmText] = useState<string>('');
  const [filteredFilm, setFilteredFilm] = useState<IFilm[]>(top100Films);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    handleSearchFilm();
  }, [searchFilmText]);

  const handleSearchFilm = () => {
    setFilteredFilm(
      top100Films.filter(
        (item) => item.label.trim().toLocaleLowerCase().includes(searchFilmText)
      )
    );
  }

  const handleToggleTheme = () => {
    themeMode.toggleTheme(themeMode.theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className={themeMode.theme + "-header py-[5px]"}>
      <div className="container">
        <div className="common-flex-box">
          <Link className="logo" to="/">
            <img className="h-[50px]" src={images[`./logo-${themeMode.theme}.png`]} alt="Logo" />
          </Link>
          <div>
            <ul className="header-nav-mid common-flex-box">
              <li>
                <Link to={'/series'} className="common-flex-box">
                  <span>Anime bộ</span>
                </Link>
              </li>
              <li>
                <Link to={''} className="common-flex-box">
                  <span>Movie (OVA)</span>
                </Link>
              </li>
              <Menu as="li" className="relative">
                <Menu.Button className="common-flex-box">
                  {({ open }) => (
                    <>
                      <span className="me-1">Thể loại</span>
                      <Icons
                        themeMode={themeMode.theme}
                        iconName={open ? 'dropdownfirst-up' : 'dropdownfirst-down'}
                        className="h-[6px]" />
                    </>
                  )}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="header-nav-dropdown dropdown-genre absolute left-1/2 translate-x-[-50%]">
                    <ul className="common-flex-box flex-wrap w-full p-3 py-1 overflow-hidden">
                      {genres && genres.length > 0 && genres.map((genre) => (
                        <Menu.Item as="li" key={genre}>
                          {({ active }) => (
                            <Link to={'/genres'} className={active ? '' : ''}>{genre}</Link>
                          )}
                        </Menu.Item>
                      ))}
                    </ul>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="li" className="relative">
                <Menu.Button className="common-flex-box">
                  {({ open }) => (
                    <>
                      <span className="me-1">Quốc gia</span>
                      <Icons
                        themeMode={themeMode.theme}
                        iconName={open ? 'dropdownfirst-up' : 'dropdownfirst-down'}
                        className="h-[6px]" />
                    </>
                  )}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="header-nav-dropdown dropdown-country absolute left-1/2 translate-x-[-50%]">
                    <ul className="common-flex-box flex-wrap w-full p-3 py-1 overflow-hidden">
                      {countries && countries.length > 0 && countries.map((country) => (
                        <Menu.Item as="li" key={country}>
                          {({ active }) => (
                            <a href="#" className={active ? '' : ''}>{country}</a>
                          )}
                        </Menu.Item>
                      ))}
                    </ul>
                  </Menu.Items>
                </Transition>
              </Menu>
            </ul>
          </div>
          <div>
            <div className="header-nav-end common-flex-box">
              {/* Nav search */}
              <div className="relative nav-search common-flex-box rounded-2xl px-1">
                <Combobox nullable>
                  <Combobox.Button>
                    <Icons themeMode={themeMode.theme} iconName="search" className="header-icon" />
                  </Combobox.Button>
                  <Combobox.Input
                    className="w-[226px] p-1" type="text"
                    displayValue={(item: IFilm) => item?.label}
                    onChange={(e) => setSearchFilmText(e.target.value.toLocaleLowerCase())}
                    autoComplete="off"
                  />
                  {filteredFilm.length > 0
                    ? <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      afterLeave={() => setSearchFilmText('')}
                    >
                      <div className="header-nav-dropdown dropdown-search absolute left-1/2 translate-x-[-50%]">
                        <Combobox.Options className="custom-scroll">
                          {filteredFilm.map((item, index) => (
                            <Combobox.Option value={item.label} key={index}>
                              <a className="common-flex-box !h-[50px]" href="/movies">
                                <div className="w-1/4 h-full">
                                  <img className="w-[40px] h-full rounded-[5px]" src={images['./solo-leveling.jpg']} alt="" />
                                </div>
                                <div className="w-3/4 h-full flex flex-col justify-between">
                                  <p className="text-nowrap overflow-hidden text-ellipsis text-sm font-semibold">{item.label}</p>
                                  <div className="common-flex-box text-xs font-light">
                                    <span>{item.year}</span>
                                    <div>
                                      <span>FHD</span>
                                      <span className="ms-[10px]">Vietsub</span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </div>
                    </Transition>
                    : ''
                  }
                </Combobox>
              </div>
              {/* End nav search */}

              {/* Theme mode */}
              <button onClick={handleToggleTheme}>
                <Icons themeMode={themeMode.theme} iconName="thememode" className="header-icon" />
              </button>
              {/* End theme mode */}

              {isAuth
                ? <>
                  {/* Notification */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="common-flex-box">
                      {({ open }) => (
                        <>
                          <Icons themeMode={themeMode.theme} iconName={notifications.filter(item => !item.seen).length > 0 ? 'notify-seen' : 'notify'} className="header-icon notify-icon" />
                        </>
                      )}
                    </Menu.Button>
                    {notifications.length > 0
                      ? <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="header-nav-dropdown dropdown-notify absolute">
                          <ul className="custom-scroll">
                            {notifications.map((item, index) => (
                              <Menu.Item as="li" key={index} className={!item.seen ? 'unseen' : ''}>
                                {({ active }) => (
                                  <a className="common-flex-box !h-[50px] relative" href="/movies">
                                    <div className="w-1/4 h-full">
                                      <img className="w-[40px] h-full rounded-[5px]" src={images[`./${item.slug}.jpg`]} alt="" />
                                    </div>
                                    <div className="w-3/4 h-full">
                                      <p className="overflow-hidden text-ellipsis text-sm font-semibold h-full">
                                        <b>{item.film}</b> vừa mới ra mắt ngay hôm nay.
                                      </p>
                                    </div>
                                    {!item.seen
                                      && <div className="absolute top-1/2 right-1 -translate-x-1/2 w-[6px] h-[6px] rounded-[50%] bg-[#406AFF]"></div>
                                    }
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </ul>
                        </Menu.Items>
                      </Transition>
                      : ''
                    }
                  </Menu>
                  {/* End notification */}

                  {/* Account manage */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="common-flex-box">
                      {({ open }) => (
                        <>
                          <img className="w-9" src={images['./avatar.png']} alt="" />
                        </>
                      )}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="header-nav-dropdown dropdown-user absolute right-0">
                        <ul className="w-full py-[5px] overflow-hidden">
                          <Menu.Item as="li">
                            {({ active }) => (
                              <a href="#" className="common-flex-box">
                                <Icons themeMode={themeMode.theme} iconName="account" className="header-icon" />
                                <span>Tài khoản</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item as="li">
                            {({ active }) => (
                              <a href="#" className="common-flex-box">
                                <Icons themeMode={themeMode.theme} iconName="collection" className="header-icon" />
                                <span>Bộ sưu tập</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item as="li">
                            {({ active }) => (
                              <a href="#" className="common-flex-box">
                                <Icons themeMode={themeMode.theme} iconName="logout" className="header-icon" />
                                <span>Đăng xuất</span>
                              </a>
                            )}
                          </Menu.Item>
                        </ul>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* End account manage */}
                </>
                : <>
                  <Link to={'/login'} className="login-btn py-1.5 px-2 rounded-[10px] leading-[1.3rem] font-semibold">Đăng nhập</Link>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;