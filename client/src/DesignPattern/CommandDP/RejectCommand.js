import Command from "./Command";
import Reciever from "./Reciever";
export default class RejectCommand extends Command {
  constructor(id, status) {
    super();
    this.id = id;
    this.status = status;
  }

  async execute() {
    Reciever.rejectPost(this.id,this.status);
  }
}