import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import Address from "../../components/Address";
import Flex from "../../components/Flex";
import { Denoms } from "../../store/DenomStore";
import { assetFormat } from "./action";
import s from "./LogFormat.module.scss";

type Props = {
  actionStr: string;
};

//terra Address
const TerraAddressRegExp = /(terra[0-9][a-z0-9]{38})/g;
const TerraValidatorAddressRegExp = /(terravaloper[0-9][a-z0-9]{38})/g;

//text bold
const TextBoldRegExp = /[0-9]|[^A-z]/g;

const LogFormat = (prop: Props) => {
  const { actionStr } = prop;
  const renderArray: JSX.Element[] = [];
  const nativeDenoms = useRecoilValue(Denoms);

  actionStr?.split(TerraAddressRegExp).forEach(str => {
    const res = str.match(TerraAddressRegExp);
    if (!res) {
      str.split(" ").forEach(string => {
        if (string) {
          const value = assetFormat(string, nativeDenoms);
          if (!value.match(TextBoldRegExp || TerraValidatorAddressRegExp)) {
            renderArray.push(<span className={s.action}>{value}</span>);
          } else if (string.match(TerraValidatorAddressRegExp)) {
            renderArray.push(
              <Address address={string} hideIcon truncate className={s.value} />
            );
          } else {
            renderArray.push(<span className={s.value}>{value}</span>);
          }
        }
      });
    } else {
      renderArray.push(
        <Address address={str} hideIcon truncate className={s.value} />
      );
    }
  });

  return (
    <Flex className={s.wrapper}>
      {renderArray.map((item, key) => (
        <Fragment key={key}>{item}</Fragment>
      ))}
    </Flex>
  );
};

export default LogFormat;
