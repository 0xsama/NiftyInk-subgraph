import { BigInt } from "@graphprotocol/graph-ts"
import { NiftyInk, newInk } from "../../generated/NiftyInk/NiftyInk"
import { Ink, Token } from "../../generated/schema"

export function handleNewInk(event: newInk): void {

  let ink = new Ink(event.params.id.toHex())
  let token = new Token(event.params.id.toHex())

  ink.inkId = event.params.id
  ink.artist = event.params.artist
  ink.inkUrl = event.params.inkUrl
  ink.jsonUrl = event.params.jsonUrl
  ink.limit = event.params.limit
  ink.token = token.id

  ink.save()
}
