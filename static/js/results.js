$(document).ready(function(){
    var answers = [];

    $("#next").click(function(){
        $("#page1").hide();
        $("#header").attr('style','margin-top: 50px;')
        $("#page2").removeAttr('style');
        $("#btnSubmit").removeAttr('style');
    });
    $("#btnSubmit").click(function(){
         answers = [];
        if ($("#sel1").val() == '') {
            alert('Please select a value from the drop down for question 1.');
            return;
        }
        if ($("#sel2").val() == '') {
            alert('Please select a value from the drop down for question 2.');
            return;
        }
        if ($("#sel3").val() == '') {
            alert('Please select a value from the drop down for question 3.');
            return;
        }
        if ($("#sel4").val() == '') {
            alert('Please select a value from the drop down for question 4.');
            return;
        }
        if ($("#sel5").val() == '') {
            alert('Please select a value from the drop down for question 5.');
            return;
        }
        if ($("#sel6").val() == '') {
            alert('Please select a value from the drop down for question 6.');
            return;
        }
        if ($("#sel7").val() == '') {
            alert('Please select a value from the drop down for question 7.');
            return;
        }
        if ($("#sel8").val() == '') {
            alert('Please select a value from the drop down for question 8.');
            return;
        }
        if ($("#sel9").val() == '') {
            alert('Please select a value from the drop down for question 9.');
            return;
        }
        if ($("#sel10").val() == '') {
            alert('Please select a value from the drop down for question 10.');
            return;
        }

        alert('test')

        answers.push($("#sel1").val());
        answers.push($("#sel2").val());
        answers.push($("#sel3").val());
        answers.push($("#sel4").val());
        answers.push($("#sel5").val());
        answers.push($("#sel6").val());
        answers.push($("#sel7").val());
        answers.push($("#sel8").val());
        answers.push($("#sel9").val());
        answers.push($("#sel10").val());

        // var url = make_prediction(answers);
        var url = 'https://tenor.com/view/avocado-love-cute-hearts-kiss-gif-17628872';
        
        $("#result").attr('src', url);
        $("#page2").attr('style', 'visibility:hidden;height:0;');
        $("#btnSubmit").attr('style', 'visibility:hidden');
        $("#page3").removeAttr('style');

        // answers['Q40'] = $("#sel1").val()
        // answers['Q38'] = $("#sel2").val()
        // answers['Q12'] = $("#sel3").val()
        // answers['Q19'] = $("#sel4").val()
        // answers['Q16'] = $("#sel5").val()
        // answers['Q18'] = $("#sel6").val()
        // answers['Q20'] = $("#sel7").val()
        // answers['Q15'] = $("#sel8").val()
        // answers['Q9'] = $("#sel9").val()
        // answers['Q36'] = $("#sel10").val()

        // console.log('answers:', answers)

       
        
    });
    // function make_prediction(userAnswers){
            // d3.json(`/prediction/${answers}`).then((data) => {
            //     var gif_url= data;

            //     // if (predictor=1){
            //     //     var gif_url = 'https://tenor.com/view/avocado-love-cute-hearts-kiss-gif-17628872'
            //     //     console.log('couple should get married')
            //     // }
            //     // else {
            //     //     var gif_url = 'https://bestanimations.com/uploads/gifs/832552745broken-heart-animation13.gif'
            //     //     console.log('couple should break up')
            //     // }
            // }) 

            // return gif_url

            // return 'https://tenor.com/view/avocado-love-cute-hearts-kiss-gif-17628872'
    // }
                

        // make_prediction(answers);
});

