import { Header } from "@/components/Header";
import GroupBuyPage from "@/pageContainer/GroupBuyPage";
import { render } from "@testing-library/react";
describe("<Header/>", () => {
  it("render component correctly", () => {
    const { container } = render(<Test />);
    // 1
    // const input = screen.getByDisplayValue("default value");

    // 2
    expect(container).toHaveTextContent("공동구매");
  });
});

const Test = () => {
  return <div>공동매</div>;
};
