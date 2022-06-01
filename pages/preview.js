import { Editor, Frame, Element } from "@craftjs/core";

import {
  Button,
  Card,
  Columns,
  Column,
  Container,
  Image,
  Link,
  ProductCard,
  Rows,
  Row,
  Text,
  ProductContainer,
  ProductContainerContent,
  ProductDescription,
  ProductImage,
  ProductTitle,
} from "../components/user";

const Foo = () => <div>Foo</div>;

export default function Preview() {
  return (
    <div>
      <Editor
        resolver={{
          Button,
          Card,
          Column,
          Columns,
          Container,
          Image,
          Link,
          ProductCard,
          Row,
          Rows,
          Text,
          ProductContainer,
          ProductContainerContent,
          ProductDescription,
          ProductImage,
          ProductTitle,
        }}
        enabled={false}
      >
        <Frame>
          <Container id="root">
            <Rows numberOfRows="4" gap="0">
              <Row>
                <Text text="Tohle je nadpis" fontSize="20" />
              </Row>
              <Row>
                <Columns numberOfCols="2" gap="0">
                  <Column className="col-span-5">
                    <Image
                      src="http://placekitten.com/480/320"
                      alt="New image"
                      width="480"
                      height="320"
                    />
                  </Column>
                  <Column className="col-span-5">
                    <Text
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo enim ut fringilla finibus. Integer non tortor ac leo fringilla egestas semper ac mauris. Etiam laoreet molestie tellus. Donec lobortis sit amet magna et maximus. Integer rutrum rhoncus nisi. Aenean semper odio in ultricies consequat. Duis non facilisis lorem. Sed pulvinar neque nibh, at sagittis ex blandit non. Donec finibus vel quam quis feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et vehicula sapien, eu ultrices lorem. Etiam posuere id est molestie elementum. Cras efficitur enim metus, sit amet dapibus enim pretium bibendum. Donec ut mauris porttitor, maximus est ut, efficitur odio. Nam aliquam interdum nibh, quis elementum diam ullamcorper vel."
                      fontSize="15"
                    />
                  </Column>
                </Columns>
              </Row>
              <Row>
                <Text text="Tohle je footer" fontSize="15" />
              </Row>
              <Row>
                <ProductContainer>
                  <ProductContainerContent>
                    <ProductTitle fontSize="base" fontWeight="semibold" />
                    <ProductImage width="480" height="320" />
                    <ProductDescription
                      fontSize="base"
                      fontWeight="normal"
                      type="full"
                    />
                    <Rows numberOfRows="2" gap="0">
                      <Row />
                      <Row />
                    </Rows>
                  </ProductContainerContent>
                </ProductContainer>
              </Row>
            </Rows>
          </Container>
        </Frame>
      </Editor>
    </div>
  );
}
