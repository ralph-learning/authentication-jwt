defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug CORSPlug, origin: "*"
    plug :accepts, ["json"]
  end

  scope "/api/v1", ApiWeb do
    pipe_through :api

    resources("/users", UserController, only: [:create])
  end
end
