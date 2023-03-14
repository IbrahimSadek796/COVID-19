<template>
    <body>
        <section id="prevention">
            <CoPrevent/>
            <CoProtact/>
            <CoSteps/>
        </section>
    </body>
</template>


<script>
    import CoPrevent from '@/components/Advice/c-prevention.vue'
    import CoProtact from '@/components/Advice/c-protact.vue'
    import CoSteps from '@/components/Advice/c-Steps.vue'
    export default {
        components: {
            CoPrevent,
            CoProtact,
            CoSteps,
        },
    }
</script>