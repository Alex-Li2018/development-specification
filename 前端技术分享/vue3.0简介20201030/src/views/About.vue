<script>
import { ref } from "vue";
export default {
    setup() {
        const msg = ref("Hello World");

        function onClick() {
            alert("Hello World");
        }

        return {
            msg,
            onClick,
        };
    },
    render() {
        return (
            <p style={{ color: "red" }} onClick={this.onClick}>
                {this.msg}
                <a-button>按钮</a-button>
            </p>
        );
    },
};
</script>