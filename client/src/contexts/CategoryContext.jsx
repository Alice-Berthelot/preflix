import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const CategoryContext = createContext();

export function TypeProvider({ children }) {
  const [types, setTypes] = useState([
    {
      name: "action",
      id: [28, 10759],
    },
    {
      name: "animation",
      id: 16,
    },
    {
      name: "aventure",
      id: [12, 10759],
    },
    {
      name: "comédie",
      id: 35,
    },
    {
      name: "documentaire",
      id: 99,
    },
    {
      name: "drame",
      id: 18,
    },
    {
      name: "enfants",
      id: 10762,
    },
    {
      name: "familial",
      id: [10751, 10762],
    },
    {
      name: "fantastique",
      id: [14, 10765],
    },
    {
      name: "guerre",
      id: [10752, 10768],
    },
    {
      name: "histoire",
      id: 36,
    },
    {
      name: "horreur",
      id: 27,
    },
    {
      name: "musique",
      id: 10402,
    },
    {
      name: "mystère",
      id: 9648,
    },
    {
      name: "policier",
      id: [80, 9648],
    },
    {
      name: "romance",
      id: 10749,
    },
    {
      name: "science-fiction",
      id: [878, 10765],
    },
    {
      name: "thriller",
      id: 53,
    },
    {
      name: "western",
      id: 37,
    },
  ]);

  const contextValue = useMemo(
    () => ({
      types,
      setTypes,
    }),
    [types, setTypes]
  );

  TypeProvider.propTypes = {
    children: PropTypes.shape({}).isRequired,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
}
