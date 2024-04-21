<script setup lang="ts">

    const {status, data, signUp, signIn, token}: {status: any, data:{value: any}, signUp: any, signIn: any, token: any} = useAuth()

    console.log(status.value);

    console.log(data.value);

    const dataObj = data.value as {username: string, id:number};

    console.log(dataObj.id);

    try{
        const data = await signIn({username: "qwerty", password: "Qwerty@1"},{redirect: false});
        console.log(token);
    }
    catch (e:any) {
        if(e.data){//if server response w/ some error
            console.log(e.data);
        }
        else{//if the server doesn't respond
            console.log(e);
        }
    }

</script>

<template>
    <div>
        test
    </div>
</template>

<style scoped>

</style>