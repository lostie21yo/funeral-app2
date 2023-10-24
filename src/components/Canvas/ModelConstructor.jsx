import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MODELS from "../../assets/models.json";


const Model = ({ name, scale, isVisible }) => {

  const obj = useLoader(GLTFLoader, name);
  obj.castShadow = true
  return isVisible ? <primitive object={obj.scene} scale={scale} castShadow receiveShadow /> : null;
};


export const ModelConstructor = ({ modelList }) => {

  return (
    <>
      {Object.values(MODELS).map((category) =>
        Object.values(category).map((item) => {
          const name = (item.path + "/" + item.name).split("public/")[1];
          // console.log(name)
          return (
            <Model key={name} name={name} isVisible={Object.values(modelList).includes(name)} />
          );
        })
      )}
    </>
  );
};

