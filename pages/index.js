import styles from "../styles/Home.module.css";

import { Editor, Element, Frame } from "@craftjs/core";

import { Button } from "../components/user/Button";
import { Card, CardBottom, CardTop } from "../components/user/Card";

import { Row } from "../components/user/Row";
import { Text } from "../components/user/Text";
import { ProductCard } from "../components/user/ProductCard";
import { Container } from "../components/user/Container";
import { Toolbox } from "../components/Toolbox";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <Editor
            resolver={{
              Button,
              Row,
              Text,
              Container,
              ProductCard,
              Card,
              CardTop,
              CardBottom,
            }}
          >
            <div className="col-span-1 bg-slate-500">
              <Toolbox />
            </div>
            <div className="col-span-11">
              <Frame>
                <Element is={Container} id="foo" canvas>
                  <Text fontSize={20}>This is editable text</Text>
                  <h2>This is editable area</h2>

                  <Element is={Container} id="bar" canvas>
                    <Text fontSize={15}>This is subtext</Text>
                  </Element>
                </Element>
              </Frame>
            </div>
          </Editor>
        </div>
      </div>
    </div>
  );
}
