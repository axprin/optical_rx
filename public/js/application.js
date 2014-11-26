$( document ).ready(function() {
	console.log("Document is ready")
  // send an HTTP DELETE request for the sign-out link
  $('a#sign-out').on("click", function (e) {
		e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

	$("#clicker_contact").on("click", function(event){
		event.preventDefault();
		console.log("Clicked create new contacts button -- add the new form");
		$(".container").append("<div id='popup-wrapper'><form class='new_contact' action='/users/:id/contacts/new' id='new_contact' method='post'><table><col width='100'><col width='200'><col width='200'><tr><th></th><th style='text-align:center'>Right</th><th style='text-align:center'>Left</th></tr><tr><td height='40px'>Sphere</td><td><select name='r_sph_plus'><option value=''>+</option><option value='-'>-</option></select><select name='r_sph_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='r_sph_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td><td><select name='l_sph_plus'><option value=''>+</option><option value='-'>-</option></select><select name='l_sph_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='l_sph_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td></tr><tr><td height='40px'>Cylinder</td><td><select name='r_cyl_plus'><option value=''>+</option><option value='-'>-</option></select><select name='r_cyl_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='r_cyl_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td><td><select name='l_cyl_plus'><option value=''>+</option><option value='-'>-</option></select><select name='l_cyl_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='l_cyl_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td></tr><tr><td height='40px'>Axis</td><td><input type='text' name='r_axis' placeholder='Right Axis (0-180)'><br></td><td><input type='text' name='l_axis' placeholder='Left Axis (0-180)'><br></td></tr><tr><td height='40px'>BC</td><td><select name='r_bc_num'><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option></select><select name='r_bc_dec'><option value='.0'>.0</option><option value='.1'>.1</option><option value='.2'>.2</option><option value='.3'>.3</option><option value='.4'>.4</option><option value='.5'>.5</option><option value='.6'>.6</option><option value='.7'>.7</option><option value='.8'>.8</option><option value='.9'>.9</option></select></td><td><select name='l_bc_num'><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option></select><select name='l_bc_dec'><option value='.0'>.0</option><option value='.1'>.1</option><option value='.2'>.2</option><option value='.3'>.3</option><option value='.4'>.4</option><option value='.5'>.5</option><option value='.6'>.6</option><option value='.7'>.7</option><option value='.8'>.8</option><option value='.9'>.9</option></select></td></tr><tr><td height='40px'>Diameter</td><td><select name='r_diam_num'><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option></select><select name='r_diam_dec'><option value='.0'>.0</option><option value='.1'>.1</option><option value='.2'>.2</option><option value='.3'>.3</option><option value='.4'>.4</option><option value='.5'>.5</option><option value='.6'>.6</option><option value='.7'>.7</option><option value='.8'>.8</option><option value='.9'>.9</option></select></td><td><select name='l_diam_num'><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option></select><select name='l_diam_dec'><option value='.0'>.0</option><option value='.1'>.1</option><option value='.2'>.2</option><option value='.3'>.3</option><option value='.4'>.4</option><option value='.5'>.5</option><option value='.6'>.6</option><option value='.7'>.7</option><option value='.8'>.8</option><option value='.9'>.9</option></select></td></tr></table><div id='buttons'><input id='submit_contact' type='submit' class='btn btn-default'><input type='hidden' name='user_id' value='<%= @user.id %>'></div></form></div>");
	});
	$("#clicker_contact").on("click", function(event){
		event.preventDefault();
		console.log("Clicked create new contacts button -- remove the add buttons")
 			$(".add_buttons").remove();
	});
	$("#clicker_eyeglass").on("click", function(event){
		event.preventDefault();
		console.log("Clicked create new eyeglasses button -- add the new form");
		$(".container").append("<div id='popup-wrapper2'><form action='/users/:id/eyeglasses/new' id='new_eyeglass' method='post'><table><col width='100'><col width='200'><col width='200'><tr><th></th><th style='text-align:center'>Right</th><th style='text-align:center'>Left</th></tr><tr><td height='40px'>Sphere</td><td><select name='r_sph_plus'><option value=''>+</option><option value='-'>-</option></select><select name='r_sph_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='r_sph_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td><td><select name='l_sph_plus'><option value=''>+</option><option value='-'>-</option></select><select name='l_sph_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='l_sph_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select>  </td></tr><tr>  <td height='40px'>Cylinder</td>  <td><select name='r_cyl_plus'><option value=''>+</option><option value='-'>-</option></select><select name='r_cyl_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='r_cyl_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td><td><select name='l_cyl_plus'><option value=''>+</option><option value='-'>-</option></select><select name='l_cyl_num'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><select name='l_cyl_dec'><option value='.00'>.00</option><option value='.25'>.25</option><option value='.50'>.50</option><option value='.75'>.75</option></select></td></tr><tr><td height='40px'>Axis</td><td><input type='text' name='r_axis' placeholder='Right Axis (0-180)'><br></td>  <td><input type='text' name='l_axis' placeholder='Left Axis (0-180)'><br></td></tr></table><div id='buttons'><input type='submit' id='submit_eyeglass' class='btn btn-default'><input type='hidden' name='user_id' value='<%=current_user.id%>'></div></form></div>");
	});
	$("#clicker_eyeglass").on("click", function(event){
		event.preventDefault();
		console.log("Clicked create new eyeglasses button -- remove the add buttons")
 			$(".add_buttons").remove();
	});

  $('#submit_contact').submit(function(event) {
    event.preventDefault();
    console.log('Submitted new contact prescription');
    // ajaxRequest = $.ajax({
    //   url: "/users" + id + "/contacts/new",
    //   type: 'POST',
    //   data: {
    //     title: postTitle
    //   },
    //   success: function(data) {
    //     $('.post-container').append(data['post']);
    //     flashMessage(data['responseText']);
    //   },
    //   error: function(data) {
    //     console.log(data);
    //     flashMessage(data['responseText']);
    //   }
    // })
  })


	// $("#close-btn").on("click", function(event){
	// 	event.preventDefault();
	// 	console.log("Clicked close button")
 // 		$("#popup-wrapper").remove();
	// });

});


