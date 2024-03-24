import Command from "./command";
import { apiUpdateStatus, apiGetPenPosts } from "../../services";
import { getPenPosts } from "../../store/actions/post";
import Swal from "sweetalert2";
import Reciever from "./reciever";
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