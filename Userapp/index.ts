import { DefaultService } from "./generated";

async function main() {
    const user = await DefaultService.getUser("12");
    console.log(user);
}

main()