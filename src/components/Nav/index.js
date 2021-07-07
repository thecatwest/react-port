import React from "react";

function Nav() {
  const categories = [
    {
      name: "portfolio",
      description: "A portfolio showcasing my full-stack developer projects.",
    },
    {
      name: "portfolio",
      description: "A portfolio showcasing my full-stack developer projects.",
    },
    {
      name: "portfolio",
      description: "A portfolio showcasing my full-stack developer projects.",
    },
    {
      name: "portfolio",
      description: "A portfolio showcasing my full-stack developer projects.",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="light-bulb">
            {" "}
            💡
          </span>{" "}
          catwest.codes
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">about me</a>
          </li>
          <li>
            <span>contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
