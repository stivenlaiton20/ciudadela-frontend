"use client";

import { Suspense, useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import CharacterContainer from "@/app/_components/CharacterContainer";
import CustomPagination from "@/app/_components/Pagination";

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $species: String) {
    getCharacters(name: $name, species: $species) {
      id
      name
      status
      species
      image
    }
  }
`;

export default function Home() {
  const [characterSpecies, setCharacterSpecies] = useState("");

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { name: characterSpecies },
  });

  const results = data?.getCharacters || [];
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;

  const indexOfLastResults = currentPage * resultsPerPage;
  const indexOfFirstResults = indexOfLastResults - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResults, indexOfLastResults);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const handleSearch = (event: any) => {
    event.preventDefault();
    setCharacterSpecies(event.target[0].value);
  };

  return (
    <main className="ml-10 min-h-screen grid  gap-3 p-24">
      <div className="App">
        <div className="container mt-3">
          <div className="">
            <div className="col">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    className=" ml-10 border p-2 w-2/4 mr-2 text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Buscar a cualquier personaje por su nombre"
                    name="name-input"
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    type="submit"
                    id="button-addon2"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ml-10 grid grid-cols-4 gap-3">
            <Suspense>
              <CharacterContainer
                characters={currentResults}
                loading={loading}
              />
            </Suspense>
          </div>
          <CustomPagination
            resultsPerPage={resultsPerPage}
            totalResults={results.length}
            paginate={paginate}
          />
        </div>
      </div>
    </main>
  );
}
