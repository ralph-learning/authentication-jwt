defmodule ApiWeb.TestView do
  use ApiWeb, :view

  def render("test.json", %{}) do
    %{data: ""}
  end
end
