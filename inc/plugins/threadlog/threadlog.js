$(() => {
    $('#show-all').addClass('active');

    $('#threadlog-toggles a').click((e) => {
        e.preventDefault();
        const action = e.target.id;
        $('#threadlog-toggles a').removeClass('active');
        $(e.target).addClass('active');
        if (action === 'show-all') {
            $('#threadlog .threadlogrow').show();
            return;
        }

        $('#threadlog .threadlogrow').hide();
        switch (action) {
            case 'active':
                $('#threadlog .active').show();
                break;
            case 'closed':
                $('#threadlog .closed').show();
                break;
            case 'need-replies':
                $('#threadlog .needs-reply').show();
                break;
        }
    });
});
