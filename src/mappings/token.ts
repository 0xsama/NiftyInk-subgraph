import { BigInt, log  } from "@graphprotocol/graph-ts"
import { NiftyToken, mintedInk, SetTokenPriceCall } from "../../generated/NiftyToken/NiftyToken"
import { Token } from "../../generated/schema"

export function handleMintedInk(event: mintedInk): void {

  let token = new Token(event.params.id.toHex())

  token.tokenId = event.params.id
  token.owner = event.params.to
  token.inkUrl = event.params.inkUrl

  token.save()
}
