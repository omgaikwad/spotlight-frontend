import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";

const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState();

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(async () => {
    if (auth.isLoggedIn) {
      try {
        const historyResponse = await axios.get("/api/user/history", {
          headers: {
            authorization: auth.token,
          },
        });
        setHistory(historyResponse.data.history);
      } catch (err) {
        console.log(err);
      }
    } else {
      setHistory([]);
    }
  }, [auth]);

  const addVideoToHistory = async (video) => {
    try {
      const addVideoHistoryResponse = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setHistory(addVideoHistoryResponse.data.history);
    } catch (err) {
      console.log(err);
    }
  };

  const removeVideoFromHistory = async (videoId) => {
    try {
      const removeVideoHistoryResponse = await axios.delete(
        `/api/user/history/${videoId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setHistory(removeVideoHistoryResponse.data.history);
    } catch (err) {
      console.log(err);
    }
  };

  const clearHistory = async () => {
    try {
      const clearHistoryResponse = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: auth.token,
        },
      });
      setHistory(clearHistoryResponse.data.history);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        addVideoToHistory,
        removeVideoFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { useHistoryContext, HistoryContextProvider };
